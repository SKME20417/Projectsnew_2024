from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm
from django.contrib import messages
from .forms import SignUpForm
from django.contrib.auth.decorators import login_required

# Create your views here.

def register_user(request):
    if request.method == 'POST':
        form = SignUpForm(request.POST or None)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            messages.success(request, f"Welcome {username}, your account has been created successfully")
            return redirect('login')
    else:
        form = SignUpForm()
    return render(request, 'users/register.html', {'form' : form})

@login_required
def profilepage(request):
    return render(request, 'users/profile.html')


    
