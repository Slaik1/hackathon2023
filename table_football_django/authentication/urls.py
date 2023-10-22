from django.urls import path
from .views import LogInView, RegisterView, AccountConfirmView, LogOutView

urlpatterns = [
    path('Login', LogInView.as_view()),
    path('Register', RegisterView.as_view()),
    path('AccountConfirm', AccountConfirmView.as_view()),
    path('Logout', LogOutView.as_view())
]
