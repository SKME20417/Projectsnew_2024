from .models import Post
from django import forms
from .models import Comment

class CreatePostForm(forms.ModelForm):
    class Meta:
        model = Post
        fields = ('title', 'image', 'caption')
    
class CommentForm(forms.ModelForm):
    class Meta:
        model = Comment
        fields = ['body', 'posted_by',]