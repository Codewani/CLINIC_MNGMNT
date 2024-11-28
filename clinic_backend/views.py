from django.shortcuts import render
from .models import *
from .serializers import *
from django.http import JsonResponse


def patients(request):
    patients = Patient.objects.all()
    return JsonResponse(patient_serializer(patients), safe=False)

def wards(request):
    wards = Ward.objects.all()
    return JsonResponse(ward_serializer(wards), safe=False)