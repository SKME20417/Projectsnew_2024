from django.db import models

# Create your models here.

class Profile(models.Model):
    name = models.CharField(max_length=200)
    email = models.EmailField(max_length=200)
    phone_number = models.IntegerField()
    summary = models.TextField(max_length=2000)
    degree = models.CharField(max_length=200)
    school = models.CharField(max_length=200)
    university = models.CharField(max_length=200)
    previous_work = models.TextField(max_length=1000)
    skills = models.TextField(max_length=500)
    
    def __str__(self):
        return self.name
    
    
    
