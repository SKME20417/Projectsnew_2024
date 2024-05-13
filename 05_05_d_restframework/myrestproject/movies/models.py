from django.db import models

# Create your models here.

class Moviedata(models.Model):
    title = models.CharField(max_length=200)
    duration = models.FloatField()
    rating = models.FloatField()
    year = models.IntegerField()
    mtype = models.CharField(max_length=200, default='action')
    image = models.ImageField(upload_to='images/', default='images/noimg.jpg')
    
    def __str__(self):
        return self.title
    
    
