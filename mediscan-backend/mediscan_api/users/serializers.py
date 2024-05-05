from rest_framework import serializers
from .models import User
from django.contrib.auth.password_validation import validate_password
from django.utils.encoding import DjangoUnicodeDecodeError
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from .utils import Util
from django.contrib.auth.models import Group


class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(
        write_only=True, required=True, validators=[validate_password]
    )
    password2 = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = User
        fields = [
            "username",
            "email",
            "phone",
            "password",
            "password2",
        ]
        extra_kwargs = {
            "email": {"required": True},
            "phone": {"required": True},
        }

    def validate(self, attrs):
        if attrs["password"] != attrs["password2"]:
            raise serializers.ValidationError(
                {"msg": "Password and Confirm Password don't match"}
            )

        return attrs

    def create(self, validated_data):
        user = User.objects.create(
            username=validated_data["username"],
            email=validated_data["email"],
            phone=validated_data["phone"],
        )
        user.set_password(validated_data["password"])
        user.save()
        group, added = Group.objects.get_or_create(name="customer_user")
        user.groups.add(group)
        return user


class UserLoginSerializer(serializers.Serializer):
    username = serializers.CharField(max_length=155)
    password = serializers.CharField(max_length=155)


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "email", "phone"]


class UserChangePasswordSerializer(serializers.Serializer):
    password = serializers.CharField(
        max_length=255, style={"input_type": "password"}, write_only=True
    )
    password2 = serializers.CharField(
        max_length=255, style={"input_type": "password"}, write_only=True
    )

    class Meta:
        fields = ["password", "password2"]

    def validate(self, attrs):
        password = attrs.get("password")
        password2 = attrs.get("password2")
        user = self.context.get("user")

        if password != password2:
            raise serializers.ValidationError(
                "Password and Confirm Password doesn't match"
            )

        user.set_password(password)
        user.save()
        return attrs


class SendPasswordResetEmailSerializer(serializers.Serializer):
    email = serializers.EmailField(max_length=255)

    class Meta:
        fields = ["email"]

    def validate(self, attrs):
        email = attrs.get("email")
        if User.objects.filter(email=email).exists():
            user = User.objects.get(email=email)
            # uid = urlsafe_base64_encode(force_bytes(user.id))
            print(user.id)
            uid = str(user.id)
            print("Encoded UID", uid)
            token = PasswordResetTokenGenerator().make_token(user)
            link = "http://localhost:3000/api/users/reset/" + uid + "/" + token

            body = "Hai, You can click the link for reset the password " + link
            data = {
                "subject": "Reset Your Password",
                "body": body,
                "to_email": user.email,
            }
            Util.send_email(data)
            return attrs
        else:
            raise serializers.ValidationError("You are not a Registered User")


class UserResetPasswordSerializer(serializers.Serializer):
    password = serializers.CharField(
        max_length=255, style={"input_type": "password"}, write_only=True
    )
    password2 = serializers.CharField(
        max_length=255, style={"input_type": "password"}, write_only=True
    )

    class Meta:
        fields = ["password", "password2"]

    def validate(self, attrs):
        try:
            password = attrs.get("password")
            password2 = attrs.get("password2")
            uid = self.context.get("uid")
            token = self.context.get("token")

            if password != password2:
                raise serializers.ValidationError(
                    "Password and Confirm Password doesn't match"
                )

            # id = smart_str(urlsafe_base64_decode(uid))
            id = int(uid)
            user = User.objects.get(id=id)

            if not PasswordResetTokenGenerator().check_token(user, token):
                raise serializers.ValidationError("Token is not Valid or Expired")

            user.set_password(password)
            user.save()
            return attrs

        except DjangoUnicodeDecodeError:
            PasswordResetTokenGenerator().check_token(user, token)
            raise serializers.ValidationError("Token is not Valid or Expired")