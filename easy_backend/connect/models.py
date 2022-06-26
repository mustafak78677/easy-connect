from asyncio import events
from django.db import models
from django.contrib.auth.models import User
from django.contrib.postgres.fields import JSONField

# Create your models here.


class Organisation(models.Model):
    organization_name = models.CharField(max_length=250, null=True, blank=True)
    organization_host_id = models.ForeignKey(User, on_delete=models.CASCADE)
    follow = models.ManyToManyField('connect.EndUser', null=True, blank=True)
    speaker = models.CharField(max_length=255, null=True, blank=True)

    def __str__(self):
        return self.organization_name

class Event(models.Model):
    event_name = models.CharField(max_length=250, null=True, blank=True)
    event_date = models.DateField(null=True, blank=True)
    event_venue = models.CharField(max_length=250, null=True, blank=True)
    max_participants = models.IntegerField(null=True, blank=True)
    restricted_participants = models.IntegerField(null=True, blank=True)
    isPaid = models.BooleanField(default=False)
    video_link = models.CharField(max_length=255, null=True, blank=True)
    ticket_price = models.IntegerField(null=True, blank=True)
    restricted_ticket_price = models.IntegerField(null=True, blank=True)
    registration_link = models.CharField(max_length=250, null=True, blank=True)
    event_topic = models.CharField(max_length=250, null=True, blank=True)
    organisation = models.ForeignKey(Organisation, on_delete=models.DO_NOTHING)
    public = models.BooleanField(default=True)

    def __str__(self):
        return self.event_name


class EndUser(models.Model):
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    DOB = models.DateField(null=True, blank=True)
    event_participated_id = models.ManyToManyField(Event, related_name="event_participated")
    upcoming_events_id = models.ManyToManyField(Event, related_name="upcoming_events")

    def __str__(self):
        return self.user_id.username

class Payment(models.Model):
    event = models.ForeignKey(Event, on_delete=models.CASCADE, null=True, blank=True)
    user = models.ForeignKey(EndUser, on_delete=models.CASCADE, null=True, blank=True)
    amount = models.IntegerField(null=True, blank=True)
    status = models.BooleanField(default=False)
    transaction_id = models.CharField(max_length=255, null=True, blank=True)

class AllowedParticipants(models.Model):
    event = models.ForeignKey(Event, on_delete=models.CASCADE, null=True, blank=True)
    participant = models.ManyToManyField(EndUser, null=True, blank=True)



class Feedback(models.Model):
    user_id = models.ForeignKey(User, on_delete=models.DO_NOTHING, null=True, blank=True)
    event_id = models.ForeignKey(Event, on_delete=models.DO_NOTHING, null=True, blank=True)
    subject = models.CharField(max_length=250, null=True, blank=True)
    feedback = models.TextField(null=True, blank=True)
    rating = models.DecimalField(decimal_places=2, max_digits=7, null=True, blank=True)

    def __str__(self):
        return self.subject


class Answer(models.Model):
    answer = models.CharField(max_length=255, null=True, blank=True)
    isAnswer = models.BooleanField(default=False)

class Question(models.Model):
    question = models.CharField(max_length=255, null=True, blank=True)
    answer = models.ManyToManyField(Answer, null=True, blank=True)

class Quiz(models.Model):
    event = models.ForeignKey(Event, on_delete=models.CASCADE, null=True, blank=True)
    user = models.ManyToManyField(EndUser, null=True, blank=True)
    organisation = models.ForeignKey(Organisation, on_delete=models.CASCADE, null=True, blank=True)
    question = models.ManyToManyField(Question, null=True, blank=True)


# class DynamicTheme(models.Model):
#     buid = models.ForeignKey(Organisation, on_delete=models.DO_NOTHING)
#     theme = JSONField()
#     menu = JSONField()

#     def __str__(self):
#         return self.buid.name



