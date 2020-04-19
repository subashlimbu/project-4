from django.urls import path
from . import views

urlpatterns = [
    path('email', views.index), # sending requests to  '/register' to the register view(controller)
]