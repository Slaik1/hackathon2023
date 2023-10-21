from django.http import JsonResponse
from .models import Game
from .serializers import GameSerializer


def get_all_games(request):
    users = Game.objects.all()
    serializer = GameSerializer(users, many=True)

    return JsonResponse({'games': serializer.data}, safe=False)
