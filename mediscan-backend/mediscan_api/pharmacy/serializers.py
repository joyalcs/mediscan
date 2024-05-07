from rest_framework import serializers
from .models import *

class  PharamcySerializer(serializers.ModelSerializer):
    class Meta:
        model = Pharmacy
        fields = "__all__"

    

    def update(self, instance, validated_data):
        instance.name = validated_data.get("name", instance.name)
        instance.email = validated_data.get("email", instance.email)
        return super().update(instance, validated_data)
class CustomDateFormatField(serializers.DateField):
    """
    Custom DateField serializer that handles input and output date formats.
    """

    def __init__(self, **kwargs):
        kwargs['input_formats'] = ['%m-%d-%Y']  
        kwargs['format'] = '%Y-%m-%d'  # Specify output format as YYYY-MM-DD
        super().__init__(**kwargs)

class MedicineSerializer(serializers.ModelSerializer):
    # Use CustomDateFormatField for exp_date and mfd_date
    exp_date = CustomDateFormatField()
    mfd_date = CustomDateFormatField()

    class Meta:
        model = Medicine
        fields = "__all__"

class MedicineListSerializer(serializers.ModelSerializer):
    """ Serializer for Medicine List """
    exp_date = CustomDateFormatField()
    mfd_date = CustomDateFormatField()
    pharmacy = serializers.SerializerMethodField()

    class Meta:
        model = Medicine
        fields = "__all__"

    def get_pharmacy(self, obj):
        """ Custom method to serialize pharmacy details """
        pharmacy = obj.pharmacy  # Assuming 'pharmacy' is a ForeignKey in Medicine model
        if pharmacy:
            # Serialize pharmacy details using PharmacySerializer
            return PharamcySerializer(pharmacy).data
        return None
    
class DoctorsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Doctors
        fields = "__all__"

class TimeslotSerializer(serializers.ModelSerializer):
    class Meta:
        model = TimeSlot
        fields = "__all__"

class PincodeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pincode
        fields = "__all__" 