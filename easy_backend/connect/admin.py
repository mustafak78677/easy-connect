from django.contrib import admin

from .models import *

# Register your models here.

admin.site.register(EndUser)
admin.site.register(Organisation)
admin.site.register(Event)
admin.site.register(ParticipantAttendance)
