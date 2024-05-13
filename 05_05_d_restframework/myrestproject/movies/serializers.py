from .models import Moviedata
from rest_framework import serializers


class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Moviedata
        fields = '__all__'