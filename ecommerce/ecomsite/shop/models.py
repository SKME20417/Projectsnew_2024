from django.db import models

# Create your models here.

class Products(models.Model):
    name = models.CharField(max_length=200)
    price = models.FloatField()
    discounted_price  = models.FloatField()
    category = models.CharField(max_length=255)
    description = models.TextField()
    image = models.CharField(max_length=6000, default="https://poojatrader.in/wp-content/themes/petio/images/placeholder.jpg")
    

    def __str__(self):
        return self.name