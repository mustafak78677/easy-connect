from django.urls import path
from .views import *

urlpatterns = [
    path('login/', MyTokenObtainPairView.as_view(), name="login"),
    path('register/', enduserregister, name='user_register'),
    path('organiserregister/', organiserregister, name="organiser_register"),
    path('createevent/', createEvent, name='create_event'),
    path('my_events/', my_event, name="my_event"),
    path('available_events/', available_events, name="available_events"),
    path('eventDetail/', event_detail, name="event_detail"),
    path('user-event-register/', user_event_register, name="user_event_register"),
    path('event-register/', event_register, name="event_register"),
    path('end_user_events/', end_user_events, name="end_user_events"),
]