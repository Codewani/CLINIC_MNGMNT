from django.urls import path
from .views import *

urlpatterns = [
    path('patients/', PatientsAPIView.as_view(), name='patients-list'),
    path('wards/', WardsAPIView.as_view(), name='wards-list'),
    path('Ai/', AiView.as_view(), name="ai-query")
]
