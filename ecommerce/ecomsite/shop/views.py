from django.shortcuts import render
from .models import Products
from django.core.paginator import Paginator

# Create your views here.

def get_products(request):
    product_list = Products.objects.all()
    
    item_name = request.GET.get('item_name')
    
    if item_name != "" and item_name is not None:
        product_list = product_list.filter(name__icontains = item_name)
        
    paginator = Paginator(product_list, 3)
    page = request.GET.get('page')
    product_list = paginator.get_page(page)
    return render(request, "shop/index.html", {'product_list' : product_list})




