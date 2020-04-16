from django.db import models

# Create your models here.


class Book(models.Model):
    title = models.CharField(max_length=50)
    author = models.CharField(max_length=50)
    image = models.CharField(max_length=200)

    def __str__(self):
        return f'{self.title} - {self.author}'


class Appointments(models.Model):
    appointment_date = models.DateTimeField()
    # User = get_user_model()
    service = models.IntegerField()

    def __str__(self):
        return f'{self.service}'


class Services(models.Model):
    service_name = models.CharField(max_length=500)

  def __