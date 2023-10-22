from django.contrib import admin
from .models import Profile
from django.contrib.auth.models import User


class UserAdmin(admin.ModelAdmin):
    list_display = ('id', 'username')


admin.site.unregister(User)
admin.site.register(User, UserAdmin)
admin.site.register(Profile)
