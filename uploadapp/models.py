from django.db import models

# Create your models here.

# from .models import File

class File(models.Model):
    file = models.FileField(blank=False, null=False)
    def __str__(self):
        return self.file.name
    