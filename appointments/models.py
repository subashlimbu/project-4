from django.db import models
# from django.contrib.auth.models import AbstractUser
from django.contrib.auth import get_user_model
User = get_user_model()

# Create your models here.


class Category(models.Model):
    category = models.CharField(max_length=50)

    class Meta:
        verbose_name_plural = "categories"

    def __str__(self):
        return self.category


class Services(models.Model):
    service_name = models.CharField(max_length=150)
    delivery_time = models.CharField(max_length=30)
    private_price = models.DecimalField(max_digits=4, decimal_places=2)
    business_price = models.DecimalField(max_digits=4, decimal_places=2)
    category = models.ForeignKey(
        Category, related_name='appointments', on_delete=models.CASCADE)

    class Meta:
        verbose_name_plural = "services"

    def __str__(self):
        return self.service_name


class Appointment(models.Model):
    appointment_date = models.DateTimeField()
    services = models.ForeignKey(
        Services, related_name='appointments', on_delete=models.CASCADE)
    user = models.ForeignKey(
        User, related_name='appointments', on_delete=models.CASCADE)

    # def __str__(self):
    #     return self.appointment_date
