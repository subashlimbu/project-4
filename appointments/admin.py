from django.contrib import admin
from .models import Appointment, Service, Category
from .models import User

# Register your models here.
admin.site.register(Appointment)
admin.site.register(User)
admin.site.register(Service)
admin.site.register(Category)

