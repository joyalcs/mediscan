from django.shortcuts import render
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from .serializers import *
from rest_framework.decorators import api_view
from django.contrib.auth.hashers import make_password
from django.db.models import Q
from django.contrib.auth.models import Group
from users.models import User
import random
from .utils import Util

# Create your views here.


@api_view(['POST'])
def create_pharmacy(request):
    serialized = PharamcySerializer(data=request.data)
    
    if serialized.is_valid():
        if Pharmacy.objects.filter(email=serialized.validated_data['email']).exists():
            return Response({"message": "Email already exists"}, status=status.HTTP_400_BAD_REQUEST)
        
        password = serialized.validated_data.get('password')
        email = serialized.validated_data.get('email')
        username = serialized.validated_data.get('username')
        hashed_password = make_password(password)
        serialized.validated_data['password'] = hashed_password
        
        pharmacy = serialized.save()
        
        group, added = Group.objects.get_or_create(name="pharmacy")
        user = User.objects.create(
            username=username, 
            email=email,
            password=hashed_password 
        )

        user.groups.add(group)

        
        response_data = {
            "status_code": 6000,
            "data": {
                "title": "Success",
                "message": "Pharmacy created successfully",
                "data": serialized.data
            }
        }
        return Response(response_data, status=status.HTTP_201_CREATED)
    else:
        response_data = {
            "status_code": 6001,
            "data": {
                "title": "Failed",
                "message": "Validation error",
                "errors": serialized.errors
            }
        }
        return Response(response_data, status=status.HTTP_400_BAD_REQUEST)
    

@api_view(['GET'])
def pharmacies(request):
    pincode = request.GET.get("pincode")
    medicine = request.GET.get("medicine")
    query = request.GET.get("q")
    # page = request.GET.get("page")
    # if not page:
    #     page = 1
    items = Medicine.objects.all()
    if medicine:
        items = items.filter(
            Q(name__icontains=medicine)
        )
    instances = Pharmacy.objects.filter()
    # pagination=None
    if instances:
        if query:
            instances.filter(
                Q(email__icontains=query)
            )
        # if page:
        #     pagination_response, customers = paginate_instances(request, customers)
        #     pagination = pagination_response     
        serialized = PharamcySerializer(instances, many=True)
        serialized_data = serialized.data
        response_data = {
            "status_code": 6000, 
            "data": {
                "data": serialized_data,
            },
            # "pagination": pagination
        }
        return Response(response_data, status=status.HTTP_200_OK)
    else:
        response_data = {
            "status_code": 6001, 
            "data": {
                "title" : "Failed",
                "message": "There are some problems with list the Pharmacy"
                }, 
            # "pagination": pagination
        }
        return Response(response_data, status=status.HTTP_204_NO_CONTENT)

    
@api_view(['GET'])
def pharmacy(request, pk):
    try:
        instance = Pharmacy.objects.get(pk=pk)
    except Pharmacy.DoesNotExist:
        response_data = {
            "status_code": 6001, 
            "data": {
                "title" : "Failed",
                "message": "Pharmacy is not found"
                }, 
        }
        return Response(response_data, status=status.HTTP_404_NOT_FOUND)
    serialized = PharamcySerializer(instance, many=False)
    response_data = {
        "status_code": 6000, 
        "data": {
           "data": serialized.data,           
            }, 
    }
    return Response(response_data, status=status.HTTP_200_OK)
   

@api_view(['POST'])
def create_medicine(request):
    serialized = MedicineSerializer(data=request.data)
    if serialized.is_valid():
        serialized.save()   
        response_data = {
            "status_code": 6000,
            "data": {
                "title": "Success",
                "message": "Medicine created successfully",
                "data": serialized.data
            }
        }
        return Response(response_data, status=status.HTTP_201_CREATED)
    else:
        response_data = {
            "status_code": 6001,
            "data": {
                "title": "Failed",
                'message': 'Validation error',
                'errors': serialized.errors
            }
           
        }
        return Response(response_data, status=status.HTTP_400_BAD_REQUEST)
    

@api_view(['GET'])
def medicines(request):
    pharmacy_id = request.GET.get('pharmacy')
    pincode = request.GET.get("pincode")
    medicine = request.GET.get("medicine")
    query = request.GET.get("q")
    # page = request.GET.get("page")
    # if not page:
    #     page = 1
    instances = Medicine.objects.filter(is_deleted=False)
    if pharmacy_id:
        instances = Medicine.objects.filter(pharmacy=pharmacy_id, is_deleted=False)
    if pincode or medicine:
        if medicine:
            instances = instances.filter(
                Q(name__icontains=medicine)
            )
        if pincode:
           instances= instances.filter(pharmacy__pincode=pincode)
    # pagination=None
    if instances:
        if query:
            instances.filter(
                Q(email__icontains=query)
            )
        # if page:
        #     pagination_response, customers = paginate_instances(request, customers)
        #     pagination = pagination_response     
        serialized = MedicineListSerializer(instances, many=True)
        serialized_data = serialized.data
        response_data = {
            "status_code": 6000, 
            "data": {
                "data": serialized_data,
            },
            # "pagination": pagination
        }
        return Response(serialized_data, status=status.HTTP_200_OK)
    else:
        response_data = {
            "status_code": 6001, 
            "data": {
                "title" : "Failed",
                "message": "There are some problems with list the medicines"
                }, 
            # "pagination": pagination
        }
        return Response(response_data, status=status.HTTP_204_NO_CONTENT)
    
@api_view(['POST'])
def delete(request):
    try:
        pk = request.GET.get('medicine')
        medicine = Medicine.objects.get(id=pk)
        medicine.is_deleted=True
        medicine.save()
        response_data = {
            "status_code": 6000, 
            "data": {
                "message": "Medicine Deleted Successfully",
            },
            # "pagination": pagination
        }
        return Response(response_data, status=status.HTTP_200_OK)
    except:
        response_data = {
            "status_code": 6001, 
            "data": {
                "message": "Medicine Not found",
            },
            # "pagination": pagination
        }
        return Response(response_data, status=status.HTTP_200_OK)

@api_view(['GET'])
def doctors(request):
   
    query = request.GET.get("q")
    # page = request.GET.get("page")
    # if not page:
    #     page = 1
    instances = Doctors.objects.all()
    # pagination=None
    if instances:
        if query:
            instances.filter(
                Q(email__icontains=query)
            )
        # if page:
        #     pagination_response, customers = paginate_instances(request, customers)
        #     pagination = pagination_response     
        serialized = DoctorsSerializer(instances, many=True)
        serialized_data = serialized.data
        response_data = {
            "status_code": 6000, 
            "data": {
                "data": serialized_data,
            },
            # "pagination": pagination
        }
        return Response(serialized_data, status=status.HTTP_200_OK)
    else:
        response_data = {
            "status_code": 6001, 
            "data": {
                "title" : "Failed",
                "message": "There are some problems with list the doctors"
                }, 
            # "pagination": pagination
        }
        return Response(response_data, status=status.HTTP_204_NO_CONTENT)
    

@api_view(['POST'])
def email_send(request):
    try:
        user_id = request.GET.get('user')
        instance = User.objects.get(id=user_id)
        doctor = request.GET.get('doctor')
        random_number = random.randint(7, 18)
        body1 = f"Hai, Your appointment with doctor scheduled on {random_number}:00 "
        body2 = f"Hai, Your appointment with patient scheduled on {random_number}:00"
        print("doctor", doctor)
        print("inst", instance.email)
        data1 = {
                "subject": "Doctor appointment",
                "body": body1,
                "to_email": instance.email,
            }
        data2 = {
                "subject": "Patient appointment",
                "body": body2,
                "to_email": doctor,
            }
        Util.send_email(data1)
        Util.send_email(data2)
        response_data = {
                "status_code": 6000, 
                "data": {
                    "message": "email send Successfully",
                },
                # "pagination": pagination
            }
        return Response(response_data, status=status.HTTP_200_OK)
    except:
        response_data = {
                "status_code": 6001, 
                "data": {
                    "message": "There are some problems with sending the email",
                },
                # "pagination": pagination
            }
        return Response(response_data, status=status.HTTP_200_OK)
        