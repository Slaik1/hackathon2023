from django.db import models
from django.contrib.postgres.fields import ArrayField


class Game(models.Model):
    name = models.CharField(max_length=150)
    mode = models.CharField(max_length=20)
    status = models.CharField(max_length=20)
    slots = models.IntegerField()
    teams_id = ArrayField(models.IntegerField(), blank=True, default=list)
    game_log_id = ArrayField(models.IntegerField(), blank=True, default=list)

    def __str__(self):
        return self.name
