from django.db import models


class Team(models.Model):
    name = models.CharField(max_length=150)
    first_user_id = models.IntegerField()
    second_user_id = models.IntegerField()

    def __str__(self):
        return self.name
