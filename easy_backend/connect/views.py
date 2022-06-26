from django.shortcuts import render
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from .serializers import *
from .models import *
from django.contrib.auth.models import User
from rest_framework.decorators import api_view
from rest_framework.response import Response


# Create your views here.

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)
        
        serializer = UserSerializerWithToken(self.user).data
        for k,v in serializer.items():
            data[k] = v

        print(data)
        return data

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

@api_view(['POST'])
def enduserregister(request):
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

