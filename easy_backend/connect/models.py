from django.db import models
from django.contrib.auth.models import User
from django.contrib.postgres.fields import JSONField

# Create your models here.


class Organisation(models.Model):
    organization_name = models.CharField(max_length=250, null=True, blank=True)
    organization_host_id = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.organization_name

class Event(models.Model):
    event_name = models.CharField(max_length=250, null=True, blank=True)
    event_date = models.DateField()
    event_venue = models.CharField(max_length=250, null=True, blank=True)
    max_participants = models.IntegerField()
    restricted_participants = models.IntegerField()
    ticket_price = models.DecimalField(decimal_places=2, max_digits=7)
    restricted_ticket_price = models.DecimalField(decimal_places=2, max_digits=7)
    registration_link = models.CharField(max_length=250, null=True, blank=True)
    event_topic = models.CharField(max_length=250, null=True, blank=True)
    organisation = models.ForeignKey(Organisation, on_delete=models.DO_NOTHING)

    def __str__(self):
        return self.event_name

class Feedback(models.Model):
    user_id = models.ForeignKey(User, on_delete=models.DO_NOTHING)
    event_id = models.ForeignKey(Event, on_delete=models.DO_NOTHING)
    subject = models.CharField(max_length=250, null=True, blank=True)
    feedback = models.TextField(null=True, blank=True)
    rating = models.DecimalField(decimal_places=2, max_digits=7)

    def __str__(self):
        return self.subject


class EndUser(models.Model):
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    DOB = models.DateField()
    event_participated_id = models.ManyToManyField(Event, related_name="event_participated")
    upcoming_events_id = models.ManyToManyField(Event, related_name="upcoming_events")

    def __str__(self):
        return self.user_id.username

class DynamicTheme(models.Model):
    buid = models.ForeignKey(Organisation, on_delete=models.DO_NOTHING)
    theme = JSONField()
    menu = JSONField()

    def __str__(self):
        return self.buid.name



