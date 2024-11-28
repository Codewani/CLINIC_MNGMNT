from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Patient, Ward
from .serializers import PatientSerializer, WardSerializer

class PatientsAPIView(APIView):
    def get(self, request):
        patients = Patient.objects.all()  # Fetch all patients
        serializer = PatientSerializer(patients, many=True)  # Serialize queryset
        return Response(serializer.data)  # DRF handles JSON formatting
    def post(self, request):
        # Create a new patient from the request data
        serializer = PatientSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class WardsAPIView(APIView):
    def get(self, request):
        wards = Ward.objects.all()  # Fetch all wards
        serializer = WardSerializer(wards, many=True)  # Serialize queryset
        return Response(serializer.data)  # DRF handles JSON formatting
    def post(self, request):
        # Create a new ward from the request data
        serializer = WardSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
