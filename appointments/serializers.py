from rest_framework import serializers
from .models import Appointment, Category, Service, User
# from ..jwt_auth/models import User
# jwt_auth/models.py

class AppointmentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Appointment
        fields = ('id', 'appointment_date', 'services', 'user')

class CategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Category
        fields = ('id', 'category')        

class ServiceSerializer(serializers.ModelSerializer):

    class Meta:
        model = Service
        fields = ('id', 'service_name', 'delivery_time', 'private_price', 'business_price')


class PopulateServiceSerializer(serializers.ModelSerializer):
    category = CategorySerializer()
    
    class Meta:
        model = Service
        fields = ('id', 'service_name', 'delivery_time', 'private_price', 'business_price', 'category')


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('image', 'firstname', 'lastname', 'age', 'phone_number', 'user_type')

class PopulateAppointmentSerializer(serializers.ModelSerializer):
    services = ServiceSerializer(many=True)
    
    class Meta:
        model = Appointment
        fields = ('id', 'appointment_date', 'user', 'services')

