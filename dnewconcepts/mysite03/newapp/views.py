from django.shortcuts import render
from .models import Moviedata
from django.core.paginator import Paginator

# Create your views here.


def movieview(request):
    movie_objects = Moviedata.objects.all()
    
    
    movie_name = request.GET.get('movie_name')
    
    if movie_name != "" and movie_name is not None:
        movie_objects = movie_objects.filter(title__icontains = movie_name)
        
    paginator = Paginator(movie_objects,3)
    page = request.GET.get('page')
    movie_objects = paginator.get_page(page)
    return render(request, "newapp/index.html", {'movie_objects': movie_objects})



