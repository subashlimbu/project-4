from django.urls import path
from .views import ListView, DetailView, ServiceListView, ServiceDetailView

urlpatterns = [
    path('', ListView.as_view()),
    path('appointments/', ListView.as_view()),
    path('<int:pk>/', DetailView.as_view()),
    path('services/', ServiceListView.as_view()),
    path('services/<int:pk>/', ServiceDetailView.as_view()),
]
