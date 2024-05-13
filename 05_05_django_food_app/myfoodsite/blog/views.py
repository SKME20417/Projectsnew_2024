from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.


def blogview(request):
    return HttpResponse("<h1>You can write your blogs here</h1>")


def blogperson(request):
    return HttpResponse("<h2>I am mainataing recoreds of persons who are writting blogs</h2>")