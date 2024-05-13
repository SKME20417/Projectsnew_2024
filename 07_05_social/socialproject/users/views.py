from django.shortcuts import render
from .forms import LoginForm, UserRegistraionForm, ProfileEditForm, UserEditForm
from django.contrib.auth import authenticate, login
from django.http import HttpResponse
from django.contrib.auth.decorators import login_required
from .models import Profile
from posts.models import Post
import requests

# Create your views here.

def user_login(request):
    if request.method == 'POST':
        form = LoginForm(request.POST)
        if form.is_valid():
            data = form.cleaned_data
            user = authenticate(request, username = data['username'], password = data['password'])
            if user is not None:
                login(request ,user)
                return HttpResponse("User Authenticated and logged in successfully...")
            else:
                return HttpResponse("Invaild Credentials..")
    form = LoginForm()
    return render(request, 'users/login.html', {'form': form})

@login_required
def index(request):
    current_user = request.user
    c_u_posts = Post.objects.filter(user = current_user)
    profile = Profile.objects.filter(user = current_user).first()
    return render(request, 'users/index.html', {'c_u_posts': c_u_posts, 'profile': profile})

def register(request):
    if request.method == "POST":
        user_form = UserRegistraionForm(request.POST or None)
        if user_form.is_valid():
            new_user = user_form.save(commit=False)
            new_user.set_password(user_form.cleaned_data['password'])
            new_user.save()
            Profile.objects.create(user = new_user)
            return render(request, 'users/registraiondone.html')
    user_form = UserRegistraionForm()
    return render(request, 'users/register.html', {'user_form': user_form})
@login_required
def edit(request):
    if request.method == 'POST':
        user_form = UserEditForm(instance=request.user, data=request.POST)
        profile_form = ProfileEditForm(instance=request.user.profile, data=request.POST, files=request.FILES)
        if user_form.is_valid() and profile_form.is_valid():
            user_form.save()
            profile_form.save()
            return render(request, 'users/editdone.html')
    user_form = UserEditForm(instance=request.user)
    profile_form = ProfileEditForm(instance=request.user.profile)
    return render(request, 'users/edit.html', {'user_form': user_form, 'profile_form': profile_form})
