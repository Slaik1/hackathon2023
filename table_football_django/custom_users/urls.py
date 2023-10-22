from django.urls import path
from .views import TopRatedUsers

urlpatterns = [
    path('getTopUsers', TopRatedUsers.as_view())
]