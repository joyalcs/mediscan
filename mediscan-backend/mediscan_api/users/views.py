from .serializers import RegisterSerializer, UserSerializer
from .serializers import UserChangePasswordSerializer
from .serializers import SendPasswordResetEmailSerializer
from .serializers import UserResetPasswordSerializer, UserLoginSerializer
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken
from .functions import get_current_role
from rest_framework.decorators import api_view
from django.contrib.auth import authenticate
from pharmacy.models import Pharmacy



class UserRegisterView(APIView):
    serializer_class = RegisterSerializer

    def post(self, request):
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def login(request):
    serializer = UserLoginSerializer(data=request.data)
    if serializer.is_valid():
        data = serializer.validated_data
        username = data['username']
        password = data['password']
        user = authenticate(username=username, password=password)

        if user is not None and user.is_active:
            # Check if the user is a Pharmacy or regular User
            try:
                pharmacy = Pharmacy.objects.get(username=username)
                user_type = 'pharmacy'
                user_id = pharmacy.pk  # Get the primary key of Pharmacy
            except Pharmacy.DoesNotExist:
                user_type = 'user'
                user_id = user.pk  # Get the primary key of regular User

            refresh = RefreshToken.for_user(user)
            response_data = {
                "status_code": 6000,
                "data": {
                    'title': 'success',
                    'accesstoken': str(refresh.access_token),
                    'refreshtoken': str(refresh),
                    'user_type': user_type,
                    'username': user_id  # Include user_id in response
                }
            }
        else:
            response_data = {
                'status_code': 6001,
                "data": {
                    "title": "Failed",
                    'message': 'Invalid credentials'
                }
            }
    else:
        response_data = {
            'status_code': 6001,
            "data": {
                "title": "Validation error",
                'message': serializer.errors
            }
        }

    return Response(response_data, status=status.HTTP_200_OK)
    

class UserProfileView(generics.RetrieveAPIView):
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]

    def get_object(self):
        return self.request.user


class UserChangePasswordView(APIView):
    permission_classes = [IsAuthenticated]
    serializer_class = UserChangePasswordSerializer

    def post(self, request, format=None):
        serializer = UserChangePasswordSerializer(
            data=request.data, context={"user": request.user}
        )
        serializer.is_valid(raise_exception=True)
        return Response(
            {"msg": "Password Changed Successfully"}, status=status.HTTP_200_OK
        )


class SendResetPasswordEmailView(APIView):
    serializer_class = SendPasswordResetEmailSerializer

    def post(self, request, format=None):
        serializer = SendPasswordResetEmailSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        return Response(
            {"msg": "Password Reset link send. Please check your Email"},
            status=status.HTTP_200_OK,
        )


class UserResetPasswordView(APIView):
    serializer_class = UserResetPasswordSerializer

    def post(self, request, uid, token, format=None):
        serializer = UserResetPasswordSerializer(
            data=request.data, context={"uid": uid, "token": token}
        )
        serializer.is_valid(raise_exception=True)
        return Response(
            {"msg": "Password Reset Successfully"}, status=status.HTTP_200_OK
        )