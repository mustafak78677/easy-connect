from django.urls import path
from .views import *

urlpatterns = [
    path('', MyTokenObtainPairView.as_view(), name="login"),
]