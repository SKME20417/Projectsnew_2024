from django.shortcuts import render,redirect
from .forms import CreatePostForm, CommentForm
from django.contrib.auth.decorators import login_required
from .models import Post, Comment
from django.shortcuts import get_list_or_404, get_object_or_404

# Create your views here.

@login_required
def create_post(request):
    if request.method == "POST":
        form = CreatePostForm(data=request.POST or None, files=request.FILES or None)
        if form.is_valid():
            new_form = form.save(commit=False)
            new_form.user = request.user
            new_form.save()
    else:
        form = CreatePostForm(data=request.GET)    
    return render(request, 'posts/create.html', {'form' : form})




def feed(request):
    if request.method == "POST":
        comments_form = CommentForm(data = request.POST or None)
        new_comment = comments_form.save(commit=False)
        post_id = request.POST.get('post_id')
        post = get_object_or_404(Post, id = post_id)
        new_comment.post = post
        new_comment.save()
    else:
        comments_form = CommentForm()
    all_post = Post.objects.all()
    logged_user = request.user
    return render(request, 'posts/feed.html', {'all_post' : all_post, 'logged_user' : logged_user, 'comments_form' : comments_form})


def like_post(request):
    post_id = request.POST.get('post_id')
    post = get_object_or_404(Post, id = post_id)
    
    if post.liked_by.filter(id = request.user.id).exists():
        post.liked_by.remove(request.user)
    else:
        post.liked_by.add(request.user)
    return redirect('feed/')
    