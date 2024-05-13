from django.urls import path
from . import views

app_name = 'food'

urlpatterns = [
    path("", views.index, name='index'),
    path('greet/', views.greetings, name='greet'),
    path("<int:id>/", views.details, name =  'details'),
    path('add/', views.additem, name = 'additem'),
    path('update/<int:id>/', views.updateitem, name = 'updateitem'),
    path('delete/<int:id>/', views.deleteitem, name = 'deleteitem'),
]