from interpreter.views import interpret
from django.urls import path

urlpatterns = [
    path('', interpret),
]