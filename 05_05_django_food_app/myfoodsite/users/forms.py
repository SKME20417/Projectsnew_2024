from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User

class SignUpForm(UserCreationForm):
    email = forms.EmailField(max_length=254, help_text='Required. Inform a valid email address.')
    first_name = forms.CharField(max_length=254, help_text='please enter your first name')
    last_name = forms.CharField()
    mobile_number = forms.IntegerField()
    
    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'mobile_number', 'email', 'username', 'password1', 'password2']
        
        
    