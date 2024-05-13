from django.shortcuts import render
from .models import Moviedata
from .serializers import MovieSerializer
from rest_framework import viewsets

# Create your views here.

class Moviewdataview(viewsets.ModelViewSet):
    queryset = Moviedata.objects.all()
    serializer_class = MovieSerializer
    

class Actionviewset(viewsets.ModelViewSet):
    queryset = Moviedata.objects.filter(mtype='action')
    serializer_class = MovieSerializer
    
class Comedyviewset(viewsets.ModelViewSet):
    queryset = Moviedata.objects.filter(mtype='comedy')
    serializer_class = MovieSerializer
    
class Animationviewset(viewsets.ModelViewSet):
    queryset = Moviedata.objects.filter(mtype = 'animation')
    serializer_class = MovieSerializer