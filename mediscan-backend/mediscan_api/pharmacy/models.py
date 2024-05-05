from django.db import models

# Create your models here.

class Pincode(models.Model):
    name = models.CharField(max_length=200)
    municipality = models.CharField(max_length=200)
    district = models.CharField(max_length=200)
    state = models.CharField(max_length=200)
    taluk = models.CharField(max_length=200)
    latitude = models.CharField(max_length=200, null=True, blank=True)
    longitude = models.CharField(max_length=200, null=True, blank=True)
    pincode = models.CharField(max_length=200)

    def _str_(self):
        str(f"{self.name} - {self.pincode}")

class Pharmacy(models.Model):
    email = models.EmailField(unique=True)
    pincode = models.CharField(max_length=200, null=True, blank=True)
    name = models.CharField(max_length=200)
    address = models.CharField(max_length=255)
    username = models.CharField(max_length=200, unique=True, null=True, blank=True)
    password = models.CharField(max_length=255)

    def __str__(self):
        return self.name


class Medicine(models.Model):
    name = models.CharField(max_length=200)
    mfd_date = models.DateField()
    exp_date = models.DateField()
    stock = models.IntegerField()
    company = models.CharField(max_length=155)
    image =  models.ImageField(null=True, blank=True)
    pharmacy = models.ForeignKey(Pharmacy, on_delete=models.CASCADE, null=True, blank=True)

    def __str__(self):
        return self.name


class Doctors(models.Model):
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=255)
    address = models.CharField(max_length=255)
    doc_id = models.CharField(max_length=200)
    qualification = models.CharField(max_length=155)
    specialization = models.CharField(max_length=155)
    image =  models.ImageField()

    def __str__(self):
        return f"{self.first_name} {self.last_name}"

class TimeSlot(models.Model):
    doctor = models.ForeignKey(Doctors, on_delete=models.CASCADE)
    start_time = models.DateTimeField()
    end_time = models.DateTimeField()

    def __str__(self):
        return f"{self.start_time} - {self.end_time} ({self.doctor.name})"


