# Generated by Django 4.2.11 on 2024-04-06 09:41

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Products',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('price', models.FloatField()),
                ('discounted_price', models.FloatField()),
                ('category', models.CharField(max_length=255)),
                ('description', models.TextField()),
                ('image', models.CharField(default='https://poojatrader.in/wp-content/themes/petio/images/placeholder.jpg', max_length=6000)),
            ],
        ),
    ]
