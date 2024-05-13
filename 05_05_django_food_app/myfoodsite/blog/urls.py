from django.urls import path
from . import views


urlpatterns = [
    path('hello/', views.blogview, name='blogview'),
    path('person/', views.blogperson, name='blogperson'),
    
    
]



