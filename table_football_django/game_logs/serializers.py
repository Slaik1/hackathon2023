from rest_framework import serializers
from .models import GameLog


class GameLogSerializer(serializers.ModelSerializer):
    class Meta:
        model = GameLog
        fields = ['id', 'game_id', 'teams_id', 'conditions', 'game_round']
