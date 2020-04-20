from django.contrib import admin

from .models import Appointment, Category, Service, User

# Register your models here.
admin.site.register(Appointment)
admin.site.register(User)
admin.site.register(Service)
admin.site.register(Category)
admin.site.site_header = " L. A. B. S.  "
