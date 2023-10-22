from rest_framework import generics
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from .models import Game
from .serializers import GameSerializer


class AllGames(generics.ListAPIView):
    permission_classes = [AllowAny]

    queryset = Game.objects.all()
    serializer_class = GameSerializer

    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)
