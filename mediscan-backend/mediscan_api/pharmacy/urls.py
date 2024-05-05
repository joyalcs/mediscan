from django.urls import path, re_path
from . import views
urlpatterns =[
    re_path(r"^register-pharmacy/", views.create_pharmacy, name="register-pharmacy"),
    re_path(r"^pincodes/$", views.pincodes, name="pincodes"),
    re_path(r"^create-medicine/$", views.create_medicine, name="create-medicine"),
    re_path(r"^medicines/$", views.medicines, name="medicines"),
    re_path(r"^pharmacies/$", views.pharmacies, name="pharmacies"),


]