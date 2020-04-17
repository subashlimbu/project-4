from rest_framework.views import APIView # get the APIView class from DRF
from rest_framework.response import Response # get the Response class from DRF
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView

from .models import Appointment, Service
from .serializers import AppointmentSerializer, PopulateAppointmentSerializer, ServiceSerializer

# Create your views here.
class ListView(ListCreateAPIView): # extend the APIView
    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer

    def get(self, _request):
        appointment = Appointment.objects.all() # get all the books
        serializer = PopulateAppointmentSerializer(appointment, many=True)

        return Response(serializer.data) # send the JSON to the client


class DetailView(APIView): # extend the APIView
    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer

    def get(self, _request, pk):
        appointment = Appointment.objects.get(pk=pk) # get a book by id (pk means primary key)
        serializer = AppointmentSerializer(appointment)

        return Response(serializer.data) # send the JSON to the client


# Services
# class ServicesListView(ListCreateAPIView): # extend the APIView
#     queryset = Services.objects.all()
#     serializer_class = ServiceSerializer

#     def get(self, _request):
#         services = Services.objects.all()
#         serializer = ServiceSerializer(services, many=True)

#         return Response(serializer.data)

# class ServicesDetailView(RetrieveUpdateDestroyAPIView):
#     queryset = Services.objects.all()
#     serializer_class = ServiceSerializer

#     def get(self, _request, pk):
#         services = Services.objects.get(pk=pk)
#         serializer = ServicesSerializer(services)

#         return Response(serializer.data) # send the JSON to the client
