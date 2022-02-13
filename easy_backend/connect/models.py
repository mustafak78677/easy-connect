from django.db import models
from django.contrib.auth.models import User

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
    ticket_price = models.DecimalField()
    restricted_ticket_price = models.DecimalField()
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
    rating = models.DecimalField()

    def __str__(self):
        return self.subject


class EndUser(models.Model):
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    DOB = models.DateField()
    event_participated_id = models.ManyToManyField(Event)
    upcoming_events_id = models.ManyToManyField(Event)

    def __str__(self):
        return self.user_id.username



