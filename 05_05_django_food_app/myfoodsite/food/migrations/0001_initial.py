# Generated by Django 5.0.6 on 2024-05-13 11:38

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Item',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('description', models.CharField(max_length=200)),
                ('price', models.FloatField()),
                ('image', models.CharField(default='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdDgssx1K4gxTA_4VV6OHfo6nqy_jmrnkjjMjaGiw8Ag&s', max_length=6000)),
            ],
        ),
    ]