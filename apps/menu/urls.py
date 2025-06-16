from django.contrib import admin
from django.urls import path
from apps.menu.views import index

urlpatterns = [
    path('', index, name='index'),
]