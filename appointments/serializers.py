from rest_framework import serializers
from .models import Appointment, Category, Services

class AppointmentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Appointment
        fields = ('id', 'appointment_date', 'services')
        

class CategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Category
        fields = ('Category')
  
class ServiceSerializer(serializers.ModelSerializer):

    class Meta:
        model = Services
        fields = ('service_name', 'delivery_time', 'private_price', 'business_price')
        
class PopulateAppointmentSerializer(serializers.ModelSerializer):
    services = ServiceSerializer()
    
    class Meta:
        model = Appointment
        fields = ('id', 'appointment_date', 'services')
        
