from rest_framework import serializers
# from django.contrib.auth.models import User
from django.contrib.auth import get_user_model
User = get_user_model()
import django.contrib.auth.password_validation as validations
from django.contrib.auth.hashers import make_password
from django.core.exceptions import ValidationError
from appointments.models import Appointment, Service

class UserSerializer(serializers.ModelSerializer):
    
    

    password = serializers.CharField(write_only=True)
    password_confirmation = serializers.CharField(write_only=True)

    def validate(self, data):

        password = data.pop('password')
        password_confirmation = data.pop('password_confirmation')

        if password != password_confirmation:
            raise serializers.ValidationError({'password_confirmation': 'Passwords do not match'})

        try:
            validations.validate_password(password=password)
        except ValidationError as err:
            raise serializers.ValidationError({'password': err.messages})

        data['password'] = make_password(password)
        return data

    class Meta:
        # User = get_user_model()
        model = User
        fields = ('email', 'username','first_name', 'last_name',  'age', 'phone_number',  'password',  'password_confirmation', 'user_type')
        

class ServiceSerializer(serializers.ModelSerializer):

    class Meta:
        model = Service
        fields = ('id', 'service_name', 'delivery_time',
                  'private_price', 'business_price')  


class AppointmentSerializer(serializers.ModelSerializer):

    services = ServiceSerializer(many=True)
    

    class Meta:
        model = Appointment
        fields = ('id', 'appointment_date', 'services')






class PopulatedUserSerializer(serializers.ModelSerializer):

          appointments = AppointmentSerializer(many=True)


          class Meta:
            
            
            User = get_user_model()
            model = User
            fields = ('email', 'username','first_name', 'last_name',  'age', 'phone_number', 'user_type', 'appointments')



        