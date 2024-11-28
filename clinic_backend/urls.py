from django.urls import path
from .views import PatientsAPIView, WardsAPIView

urlpatterns = [
    path('patients/', PatientsAPIView.as_view(), name='patients-api'),
    path('wards/', WardsAPIView.as_view(), name='wards-api'),
]
