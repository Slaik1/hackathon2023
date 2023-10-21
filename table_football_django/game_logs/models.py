from django.db import models
from django.contrib.postgres.fields import ArrayField


class GameLog(models.Model):
    game_id = models.IntegerField()
    teams_id = models.IntegerField()
    conditions = ArrayField(models.BooleanField(), blank=True, default=list)
    game_round = models.IntegerField()

    def __str__(self):
        return f"Game Log for Game ID {self.game_id}, Round {self.game_round}"
