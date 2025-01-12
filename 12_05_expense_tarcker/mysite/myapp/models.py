from django.db import models

# Create your models here.

class Expense(models.Model):
    name = models.CharField(max_length=200)
    amount = models.FloatField()
    category = models.CharField(max_length=500)
    date = models.DateField(auto_now_add=True)
    
    def __str__(self):
        return self.name
