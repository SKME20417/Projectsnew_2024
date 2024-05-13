from django.shortcuts import render, redirect
from django.http import HttpResponse
from .models import Item
from django.template import loader
from .forms import ItemForm

# Create your views here.

def index(request):
    items = Item.objects.all()
    #template = loader.get_template("food/index.html")
    context = {
        'items' : items,
    }
    return render(request, 'food/index.html', context)

def greetings(request):
    return HttpResponse("hello how are you today i am fine")

def details(request, id):
    item_detail = Item.objects.get(id = id)
    context = {
        'item_detail' : item_detail
    }
    return render(request, 'food/details.html', context)

def additem(request):
    form = ItemForm(request.POST or None)
    
    if form.is_valid():
        form.save()
        return redirect('food:index')
    
    return render(request, 'food/additem.html', {'form' : form})
    
def updateitem(request, id):
    item = Item.objects.get(id=id)
    form = ItemForm(request.POST or None, instance=item)
    
    if form.is_valid():
        form.save()
        return redirect('food:index')
    
    return render(request, 'food/additem.html', {'form' : form, 'item' : item})

def deleteitem(request, id):
    item = Item.objects.get(id=id)
    
    if request.method == 'POST':
        item.delete()
        return redirect('food:index')
    
    return render(request, 'food/deleteitem.html', {'item' : item})