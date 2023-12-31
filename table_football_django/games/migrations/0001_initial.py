# Generated by Django 4.2.5 on 2023-10-21 12:40

import django.contrib.postgres.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Game',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=150)),
                ('mode', models.CharField(max_length=20)),
                ('status', models.CharField(max_length=20)),
                ('slots', models.IntegerField()),
                ('teams_id', django.contrib.postgres.fields.ArrayField(base_field=models.IntegerField(), blank=True, default=list, size=None)),
                ('game_log_id', django.contrib.postgres.fields.ArrayField(base_field=models.IntegerField(), blank=True, default=list, size=None)),
            ],
        ),
    ]
