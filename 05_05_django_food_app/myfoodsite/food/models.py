from django.db import models

# Create your models here.

class Item(models.Model):
    name = models.CharField(max_length=200)
    description = models.CharField(max_length=200)
    price = models.FloatField()
    image = models.CharField(max_length=6000, default="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdDgssx1K4gxTA_4VV6OHfo6nqy_jmrnkjjMjaGiw8Ag&s")
    
    def __str__(self):
        return self.name
