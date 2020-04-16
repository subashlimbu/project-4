from django.contrib import admin
from .models import Appointment
from .models import User

# Register your models here.
admin.site.register(Appointment)
admin.site.register(User)

