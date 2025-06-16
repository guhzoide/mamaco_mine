from django.contrib import admin
from django.urls import path
from apps.modpack.views import modpack

urlpatterns = [
    path('/modpack', modpack, name='modpack'),
]