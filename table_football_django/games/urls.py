from django.urls import path
from .views import AllGames

urlpatterns = [
    path('getGame', AllGames.as_view())
]