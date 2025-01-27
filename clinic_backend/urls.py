from django.urls import path
from .views import *

urlpatterns = [
    path('patients/', PatientsAPIView.as_view(), name='patients-api'),
    path('wards/', WardsAPIView.as_view(), name='wards-api'),
    path('Ai/', AiView.as_view(), name="ai-api")
]
