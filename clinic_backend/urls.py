from django.urls import path
from .views import *

urlpatterns = [
    path('patients/', patients),
    path('wards/', wards),
]
