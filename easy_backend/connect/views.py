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
from django.db.models import Q
import datetime
import string
import random
import razorpay

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

# sam available events
@api_view(['POST'])
def available_events(request):
    data = request.data['data']
    # print(data)
    if EndUser.objects.filter(user_id__id = data['id']).exists():
        endUser = EndUser.objects.get(user_id__id = data['id'])
        upcomingEvent = endUser.upcoming_events_id.all()
        if Event.objects.filter(~Q(id__in = upcomingEvent), public=True).exists():
            publicEvents = Event.objects.filter(~Q(id__in = upcomingEvent), public=True)
            event_serializer = EventSerializer(publicEvents, many=True).data
            return Response(event_serializer)
        
        else: 
            return Response({'error': 'Public Events are not available'})
    else:
        return Response({'error': 'Your not logged in as participant'})
    # if Organisation.objects.filter(organization_host_id__id=data['id']).exists():
    #     if Event.objects.filter(organisation__organization_host_id__id=data['id']).exists():
    #         event = Event.objects.filter(organisation__organization_host_id__id=data['id'])
    #         event_serializer = EventSerializer(event, many=True).data
    #         return Response(event_serializer)
    #     else:
    #         return Response({'error': 'No Event Exists of this Organisation'})
    # else:
    #     return Response({'error': 'You are not logged in as Organisation'})


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
    end_user = EndUser.objects.get(user_id__id = data['id'])
    upcoming_event_id = end_user.upcoming_events_id.all()

    
    if Event.objects.filter(~Q(id__in = upcoming_event_id),registration_link=data['url']).exists():
        event = Event.objects.get(registration_link=data['url'])
        event_serializer = EventSerializer(event, many=False).data
        return Response(event_serializer)
    else:
        return Response({'error': 'Sorry, Either the registration date of event has expired or no such event exists'})

@api_view(['POST'])
def event_register(request):
    data = request.data['data']
    if Event.objects.filter(id=data['event_id']).exists():
        # print(data['user_id'])
        event = Event.objects.get(id=data['event_id'])
        user = EndUser.objects.get(user_id__id=data['user_id'])
        user.upcoming_events_id.add(event)
        user.save()
        if data['type'] == "online":
            event.max_participants = event.max_participants - 1
        elif data['type'] == "offline":
            event.restricted_participants = event.restricted_participants - 1
        event.save()
        return Response({'success': 'Successfully Registered for event'})
    else:
        return Response({'error': "Sorry couldn't register, Please try again"})


    
@api_view(['POST'])
def end_user_events(request):
    data = request.data['data']
    if EndUser.objects.filter(user_id__id = data['id']).exists():
        endUser = EndUser.objects.get(user_id__id = data['id'])
        participated_events = endUser.upcoming_events_id.all()
        if Event.objects.filter(id__in = participated_events).exists():
            publicEvents = Event.objects.filter(id__in = participated_events)
            event_serializer = EventSerializer(publicEvents, many=True).data
            return Response(event_serializer)
        
        else: 
            return Response({'error': 'Public Events are not available'})
    else:
        return Response({'error': 'Your not logged in as participant'})

@api_view(['POST'])
def streaming(request):
    data = request.data['data']
    if Event.objects.filter(registration_link=data['url']).exists():
        event = Event.objects.get(registration_link=data['url'])
        event_serializer = EventSerializer(event, many=False).data
        return Response(event_serializer)

@api_view(['POST'])
def participantattendance(request):
    data = request.data['data']
    if data['type'] == 'entering':
        user = User.objects.get(id=data['user_id'])
        participant = EndUser.objects.get(user_id=user)
        event = Event.objects.get(id=data['event_id'])
        attendance = ParticipantAttendance.objects.create(
            user=participant,
            event=event,
            start_time = timezone.now()
        )
        attendance_serializer = ParticipantAttendanceSerializer(attendance, many=False).data
        return Response(attendance_serializer)

    elif data['type'] == 'leaving':
        id = data['attendance_id']
        attendance = ParticipantAttendance.objects.get(id=id)
        attendance.end_time = timezone.now()
        attendance.save()
        return Response({'message': 'success'})
        
@api_view(['POST'])
def createOrder(request):
    global client
    data = request.data

    amount = int(float(data['amount']))

    client = razorpay.Client(auth=("rzp_test_OLdSMrCfi85XEX", "z9aU6glWJAty9Gh6aLWZSsyV"))

    data = {"amount" : amount, "currency" : "INR"}
    payment = client.order.create(data=data)

    return Response({'order_id': payment['id'], 'amount': payment['amount'], 'currency':payment['currency']})

@api_view(['POST'])
def verifySignature(request):
    res = request.data

    params_dict = {
        'razorpay_payment_id' : res['razorpay_paymentId'],
        'razorpay_order_id' : res['razorpay_orderId'],
        'razorpay_signature' : res['razorpay_signature']
    }

    # verifying the signature
    res = client.utility.verify_payment_signature(params_dict)

    if res == True:
        return Response({'status':'Payment Successful'})
    return Response({'status':'Payment Failed'})

@api_view(['POST'])
def event_details(request):
    data = request.data['params']
    if Event.objects.filter(id=data['id']).exists():
        event = Event.objects.get(id=data['id'])
        participant = EndUser.objects.filter(upcoming_events_id=event)
        user = User.objects.filter(id__in=participant)
        event_serializer = EventSerializer(event, many=False).data
        user_serializer = ParticipantSerializer(participant, many=True).data
        print(event.event_date, datetime.date.today())
        if event.event_date >= datetime.date.today():
            attendance = ParticipantAttendance.objects.filter(event=event)
            attendance_serializer = ParticipantAttendanceSerializer(attendance, many=True).data
            return Response({'event_serializer': event_serializer, 'user_serializer': user_serializer, 'attendance_serializer': attendance_serializer})
        return Response({'event_serializer': event_serializer, 'user_serializer': user_serializer})
    else:
        return Response({"error": "Something went wrong"})

@api_view(['POST'])
def stats(request):
    user = EndUser.objects.filter().all().count()
    organiser = Organisation.objects.filter().all().count()
    event = Event.objects.filter().all().count()
    print(user, organiser, event)
    return Response({'user': user, 'organiser': organiser, 'event': event})