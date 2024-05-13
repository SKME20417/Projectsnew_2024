from django.shortcuts import render, redirect
import requests
import bs4
from .models import Link
from django.http import HttpResponseRedirect
# Create your views here.

def scrape(request):
    if request.method == 'POST':
        site = request.POST.get('site', '')
        res = requests.get(site)
        soup = bs4.BeautifulSoup(res.text, 'html.parser')
        links = soup.find_all('a')
        
        
        for link in links:
            link_address = link.get('href')
            link_text  = link.string
            
            Link.objects.create(address = link_address, name = link_text)
        return redirect('/')
    else:
        data = Link.objects.all()
    return render(request, 'myscraper/result.html', {'data': data})

def clear(request):
    Link.objects.all().delete()
    return redirect('/')
