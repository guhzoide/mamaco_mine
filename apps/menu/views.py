from django.shortcuts import render, redirect
from django.contrib import messages

def index(request):
    return render(request, 'index/index.html')