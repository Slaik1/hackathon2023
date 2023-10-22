from django.http import JsonResponse
from .models import Game
from .serializers import GameSerializer


def get_all_games(request):
    games = Game.objects.all()
    serializer = GameSerializer(games, many=True)

    return JsonResponse({'games': serializer.data}, safe=False)
