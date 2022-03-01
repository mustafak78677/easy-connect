from django.urls import path
from .views import *

urlpatterns = [
    path('login/', MyTokenObtainPairView.as_view(), name="login"),
    path('register/', enduserregister, name='user_register'),
]