# Generated by Django 3.2.20 on 2024-04-06 08:28

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Moviedata',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('ratings', models.FloatField()),
                ('year', models.IntegerField()),
                ('imdb', models.CharField(max_length=255)),
                ('actor', models.CharField(max_length=255)),
            ],
        ),
    ]
