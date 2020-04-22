from rest_framework.views import APIView # get the APIView class from DRF
from rest_framework.response import Response # get the Response class from DRF
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.status import HTTP_201_CREATED, HTTP_422_UNPROCESSABLE_ENTITY, HTTP_204_NO_CONTENT, HTTP_401_UNAUTHORIZED
from django.contrib.auth import get_user_model
User = get_user_model()
from .models import Appointment, Service, Category
from .serializers import AppointmentSerializer, PopulateAppointmentSerializer, ServiceSerializer, PopulateServiceSerializer, CategorySerializer, UserSerializer, PopulateCategorySerializer

from rest_framework import permissions
from rest_framework.permissions import BasePermission
# Create your views here.
# Appointments
class ListView(APIView): # extend the APIView
    # queryset = Appointment.objects.all()
    # serializer_class = AppointmentSerializer
    permission_classes = (IsAuthenticated, )
    # def get(self, request, pk):
    def get(self, _request):
        current_user = request.user.id
        appointment = Appointment.objects.all()
        serializer = PopulateAppointmentSerializer(appointment, many=True)

        return Response(serializer.data) # send the JSON to the client

    

    def post(self, request):
        request.data['user'] = request.user.id
        appointment = AppointmentSerializer(data=request.data)
        if appointment.is_valid():
            appointment.save()
            return Response(appointment.data, status=HTTP_201_CREATED)
        return Response(appointment.errors, status=HTTP_422_UNPROCESSABLE_ENTITY)



class DetailView(RetrieveUpdateDestroyAPIView): # extend the APIView
    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer

    def get(self, _request, pk):
        appointment = Appointment.objects.get(pk=pk) # get the appointment by id (pk means primary key)
        serializer = PopulateAppointmentSerializer(appointment)

        return Response(serializer.data)


# Services
class ServiceListView(ListCreateAPIView):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer

    def get(self, _request):
        service = Service.objects.all()
        serializer = PopulateServiceSerializer(service, many=True)

        return Response(serializer.data)

class ServiceDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer

    def get(self, _request, pk):
        service = Service.objects.get(pk=pk)
        serializer = PopulateServiceSerializer(service)

        return Response(serializer.data)


# CategorySerializer
class CategoryListView(ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

    def get(self, _request):
        category = Category.objects.all()
        serializer = PopulateCategorySerializer(category, many=True)

        return Response(serializer.data)

class CategoryDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

    def get(self, _request, pk):
        category = Category.objects.get(pk=pk)
        serializer = PopulateCategorySerializer(category)

        return Response(serializer.data)

# Users
class UserDetailView(RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def get(self, _request, pk):
        user = User.objects.get(pk=pk)
        serializer = UserSerializer(user)

        return Response(serializer.data)