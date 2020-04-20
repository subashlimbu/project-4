from django.db import models
from django.contrib.auth.models import User
from django.contrib.auth.models import AbstractUser
# Create your models here.


class User(AbstractUser):
    image = models.ImageField(max_length=100)
    firstname = models.CharField(max_length=50)
    lastname = models.CharField(max_length=50)
    age = models.IntegerField(null=True)
    phone_number = models.IntegerField(null=True)
    BUSINESS = 'BA'
    INDIVIDUAL = 'IN'
    USER_TYPE_CHOICES = [
        (BUSINESS, 'Business'),
        (INDIVIDUAL, 'Individual'),
    ]
    user_type = models.CharField(
        max_length=2,
        choices=USER_TYPE_CHOICES,
        default=INDIVIDUAL,
    )
    
    def __str__(self):
        return self.username
    
    
    

