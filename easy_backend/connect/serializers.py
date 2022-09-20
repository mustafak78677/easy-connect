from dataclasses import fields
from .models import *
from django.contrib.auth.models import User
from rest_framework import serializers
from rest_framework_simplejwt.tokens import RefreshToken
from datetime import date

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'first_name', 'last_name', 'email', 'is_staff', 'is_superuser']

class UserSerializerWithToken(UserSerializer):
    token = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = User
        fields = ['id', 'username', 'first_name', 'last_name', 'email', 'is_staff', 'is_superuser', 'token']

    def get_token(self, obj):
        token = RefreshToken.for_user(obj)
        return str(token.access_token)

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = '__all__'

class ParticipantAttendanceSerializer(serializers.ModelSerializer):
    id = serializers.SerializerMethodField(read_only=True)
    first_name = serializers.SerializerMethodField(read_only=True)
    last_name = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = ParticipantAttendance
        fields = ['start_time', 'end_time', 'id', 'first_name', 'last_name']

    def get_id(self, obj):
        return obj.user.id
    

    def get_first_name(self, obj):
        return obj.user.user_id.first_name

    def get_last_name(self, obj):
        return obj.user.user_id.last_name

class ParticipantSerializer(serializers.ModelSerializer):
    first_name = serializers.SerializerMethodField(read_only=True)
    last_name = serializers.SerializerMethodField(read_only=True)
    email = serializers.SerializerMethodField(read_only=True)
    age = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = EndUser
        fields = ['id', 'first_name', 'last_name', 'email', 'age']

    def get_first_name(self, obj):
        return obj.user_id.first_name

    def get_last_name(self, obj):
        return obj.user_id.last_name

    def get_email(self, obj):
        return obj.user_id.email

    def get_age(self, obj):
        today = date.today()
        return today.year - obj.DOB.year - ((today.month, today.day) < (obj.DOB.month, obj.DOB.day))
