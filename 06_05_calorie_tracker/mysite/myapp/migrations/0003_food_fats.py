# Generated by Django 3.2.20 on 2024-05-06 13:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0002_consume'),
    ]

    operations = [
        migrations.AddField(
            model_name='food',
            name='fats',
            field=models.FloatField(default=2.5),
        ),
    ]
