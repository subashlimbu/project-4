from rest_framework.views import APIView # get the APIView class from DRF
from rest_framework.response import Response # get the Response class from DRF
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView

from .models import Appointment, Service, Category
from .serializers import AppointmentSerializer, PopulateAppointmentSerializer, ServiceSerializer, PopulateServiceSerializer, CategorySerializer

# Create your views here.
# Appointments
class ListView(ListCreateAPIView): # extend the APIView
    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer

    def get(self, _request):
        appointment = Appointment.objects.all()
        serializer = PopulateAppointmentSerializer(appointment, many=True)

        return Response(serializer.data) # send the JSON to the client


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
        serializer = CategorySerializer(category, many=True)

        return Response(serializer.data)

class CategoryDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

    def get(self, _request, pk):
        category = Category.objects.get(pk=pk)
        serializer = CategorySerializer(category)

        return Response(serializer.data)
