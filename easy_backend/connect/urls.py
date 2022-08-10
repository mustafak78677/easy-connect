from django.urls import path
from .views import *

urlpatterns = [
    path('login/', MyTokenObtainPairView.as_view(), name="login"),
    path('register/', enduserregister, name='user_register'),
    path('organiserregister/', organiserregister, name="organiser_register"),
    path('createevent/', createEvent, name='create_event'),
    path('my_events/', my_event, name="my_event"),
    path('eventDetail/', event_detail, name="event_detail"),
]