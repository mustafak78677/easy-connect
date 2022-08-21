from math import fabs
from django.utils import timezone
from django.shortcuts import render
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from .serializers import *
from .models import *
from django.contrib.auth.models import User
from rest_framework.decorators import api_view
from rest_framework.response import Response
import datetime
import string
import random

# Create your views here.

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)
        
        serializer = UserSerializerWithToken(self.user).data
        for k,v in serializer.items():
            data[k] = v

        return data

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

@api_view(['POST'])
def enduserregister(request):
    data = request.data['data']
    if User.objects.filter(username=data['username']).exists():
        print('user exists')
        return Response({'error': 'Username already exists'})
    if User.objects.filter(email=data['email']).exists():
        print('email exists')
        return Response({'error': 'Email already exists'})

    user = User.objects.create_user(
        username = data['username'],
        first_name = data['firstname'],
        last_name = data['lastname'],
        email = data['email'],
        password = data['password']
    )

    user.save()

    user = User.objects.get(username=data['username'])

    enduser = EndUser.objects.create(
        user_id = user,
        DOB = data['dob']
    )

    enduser.save()

    return Response({'success': 'Registration Successfull'})

@api_view(['POST'])
def organiserregister(request):
    data = request.data['data']
    print(data)
    if User.objects.filter(username=data['username']).exists():
        print('user exists')
        return Response({'error': 'Username already exists'})
    if User.objects.filter(email=data['email']).exists():
        print('email exists')
        return Response({'error': 'Email already exists'})

    user = User.objects.create_user(
        username = data['username'],
        first_name = data['firstname'],
        last_name = data['lastname'],
        email = data['email'],
        password = data['password'],
        is_staff = True
    )

    user.save()

    user = User.objects.get(username=data['username'])

    organiser = Organisation.objects.create(
        organization_host_id = user,
        organization_name = data['organisationName']
    )

    organiser.save()

    return Response({"success": "Organiser Created successfully"})


@api_view(['POST'])
def createEvent(request):
    today = timezone.now()
    data = request.data['data']
    print(data)
    if Organisation.objects.filter(organization_host_id__pk=data['organization_host_id']).exists():
        organisation = Organisation.objects.get(organization_host_id__pk=data['organization_host_id'])
    else:
        return Response({'error': 'Your not logged from organisation account.'})
    # print(organisation.organisation_name)   
    if data['event_date'] <= str(today):
        return Response({'error': 'Please enter valid date'})

            
    S = 10  # number of characters in the string.   
    ran = ''.join(random.choices(string.ascii_uppercase + string.digits, k = S))    

    registration_link = str(ran)

    event = Event.objects.create(
        event_name = data['event_name'],
        event_date = data['event_date'],
        event_venue = data['event_venue'],
        max_participants = data['max_participants'],
        restricted_participants = data['restricted_participants'],
        ticket_price = data['ticket_price'],
        restricted_ticket_price = data['restricted_ticket_price'],
        registration_link = registration_link,
        event_topic = data['event_topic'],
        public = data['isPublic'],
        organisation = organisation
    )
    # event.save()

    return Response({'success': 'Event created successfull'})

@api_view(['POST'])
def my_event(request):
    data = request.data['data']
    if Organisation.objects.filter(organization_host_id__id=data['id']).exists():
        if Event.objects.filter(organisation__organization_host_id__id=data['id']).exists():
            event = Event.objects.filter(organisation__organization_host_id__id=data['id'])
            event_serializer = EventSerializer(event, many=True).data
            return Response(event_serializer)
        else:
            return Response({'error': 'No Event Exists of this Organisation'})
    else:
        return Response({'error': 'You are not logged in as Organisation'})

@api_view(['POST'])
def event_detail(request):
    data = request.data['data']
    if Event.objects.filter(id=data['id']).exists():
        event = Event.objects.get(id=data['id'])
        event_serializer = EventSerializer(event, many=False).data
        return Response(event_serializer)
    else:
        return Response({'error': 'Sorry couldn\'t get the event, Please try again'})

@api_view(['POST'])
def user_event_register(request):
    data = request.data['data']
    if Event.objects.filter(registration_link=data['url']).exists():
        event = Event.objects.get(registration_link=data['url'])
        event_serializer = EventSerializer(event, many=False).data
        return Response(event_serializer)
    else:
        return Response({'error': 'Sorry, Either the registration date of event has expired or no such event exists'})

@api_view(['POST'])
def event_register(request):
    data = request.data['data']
    if Event.objects.filter(id=data['event_id']).exists():
        print(data['user_id'])
        event = Event.objects.get(id=data['event_id'])
        user = EndUser.objects.get(user_id__id=data['user_id'])
        user.upcoming_events_id.add(event)
        user.save()
        event.max_participants = event.max_participants - 1
        event.save()
        return Response({'success': 'Successfully Registered for event'})
    else:
        return Response({'error': "Sorry couldn't register, Please try again"})


    
