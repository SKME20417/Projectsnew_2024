from django.db import models

# Create your models here.

class Moviedata(models.Model):
    title = models.CharField(max_length=255)
    ratings = models.FloatField()
    year = models.IntegerField()
    imdb = models.CharField(max_length=255)
    actor = models.CharField(max_length=255)
    
    
    def __str__(self):
        return self.title
    
    
