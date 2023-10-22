from django.db.models import F
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from .models import Profile
from .serializers import ProfileSerializer


class TopRatedUsers(generics.ListAPIView):
    permission_classes = [AllowAny]

    queryset = Profile.objects.exclude(user__is_superuser=True).annotate(username=F('user__username'), email=F('user__email')).order_by('-points')[:20]
    serializer_class = ProfileSerializer

    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)
