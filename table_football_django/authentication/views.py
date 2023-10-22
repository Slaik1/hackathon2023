from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from rest_framework_simplejwt.tokens import RefreshToken, OutstandingToken
from rest_framework_simplejwt.views import TokenVerifyView


class LogInView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')

        user = authenticate(username=username, password=password)

        if user is not None:
            refresh = RefreshToken.for_user(user)

            access_token = str(refresh.access_token)

            return Response({'access_token': access_token}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)


class RegisterView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')

        if User.objects.filter(username=username).exists():
            return Response({'error': 'User with this username already exists'}, status=status.HTTP_400_BAD_REQUEST)

        user = User.objects.create_user(username=username, password=password)

        refresh = RefreshToken.for_user(user)

        access_token = str(refresh.access_token)

        return Response({'access_token': access_token}, status=status.HTTP_201_CREATED)


class AccountConfirmView(TokenVerifyView):
    def post(self, request):
        token = request.data.get('access_token')

        if not token:
            return Response({'error': 'Token not provided'}, status=status.HTTP_400_BAD_REQUEST)

        token_verify_response = super().post(request)

        if token_verify_response.status_code == status.HTTP_200_OK:
            return Response({'message': 'Token is valid'}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'Token is not valid'}, status=token_verify_response.status_code)


class LogOutView(APIView):
    def post(self, request):
        access_token = request.data.get('access_token')

        if not access_token:
            return Response({'error': 'Access token not provided'}, status=status.HTTP_400_BAD_REQUEST)

        try:
            OutstandingToken.objects.get(token=access_token).blacklist()
            return Response({'message': 'Access token has been blacklisted'}, status=status.HTTP_200_OK)
        except OutstandingToken.DoesNotExist:
            return Response({'error': 'Access token is not valid'}, status=status.HTTP_400_BAD_REQUEST)
