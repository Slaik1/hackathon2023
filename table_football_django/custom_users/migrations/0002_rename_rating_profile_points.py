# Generated by Django 4.2.5 on 2023-10-22 08:42

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('custom_users', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='profile',
            old_name='rating',
            new_name='points',
        ),
    ]
