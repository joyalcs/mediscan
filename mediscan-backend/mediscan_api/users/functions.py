from django.contrib.auth.models import User, Group
from django.contrib.auth.hashers import make_password

def create_user(username, password):
    user = User.objects.create(
        username=username, 
        password = make_password(password),
    )
    return user


def delete_user(username):
    try:
        user = User.objects.get(username=username)
        user.is_active=True
        user.save()
    except User.DoesNotExist:
        return "No user is found with username"


def update_user(user, username, password):
    if user:
        # if password is not None:
        #     hashed_password = make_password(password)
        #     user.set_password(password)

        print(user.pk, "---------------------")
        # password = make_password(password)
        print(user.password, "---------------------123")
        user.set_password(password)
        user.username = username

        user.save()
        return user
    

def get_current_role(user):
    is_superadmin = False
    is_customer_user = False
    is_pharmacy_user = False

    current_role = "user"
    if user.is_authenticated:
        groups = user.groups.all()

        if user.is_superuser:
            is_superadmin = True
        elif groups.filter(name="customer_user").exists():
            is_customer_user = True
        elif groups.filter(name="pharmacy").exists():
            is_pharmacy = True
        else:
            print("1111111111111111111111111111")
        
        print('-------------------------------------')

        if is_superadmin:
            current_role = "superadmin"
        elif is_customer_user:
            current_role = "customer_user"
        elif is_pharmacy:
            current_role = "pharmacy"
        else:
            print("33333333333333333333333")
        return current_role