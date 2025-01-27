from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Patient, Ward
from .serializers import PatientSerializer, WardSerializer
from django.db import connection
from django.http import JsonResponse
from openai import OpenAI
from dotenv import load_dotenv
import os

load_dotenv()
api_key = os.getenv("OPENAI_API_KEY")

client = OpenAI(api_key=api_key)

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

def dictfetchall(cursor):
    columns = [col[0] for col in cursor.description]
    return [dict(zip(columns, row)) for row in cursor.fetchall()]


class AiView(APIView):
    def post(self, request):
        f = open("schema.txt", "r")
        schema = f.read()
        f.close()
        print(request.data)
        completion = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[
                {
                    "role": "system", 
                    "content": f"You task is to write a MySQL query based on the user's input. The query should not make any changes to the database and should solely be used for data retrieval using only 'SELECT' queries. Here is my schema to help you determine how to write the SELECT command: {schema}. Your response should only contain the SQL command. Do not say things like 'Sure here is your response'. No special characters just the MYSQL resonse. USE the LIKE operation when searching for names"
                },
                {
                    "role": "user",
                    "content": request.data['message']
                }
            ]
        )
        
        query = completion.choices[0].message.content
        print(query)
        with connection.cursor() as cursor:
            cursor.execute(query)
            results = dictfetchall(cursor)
        return JsonResponse(results, safe=False)

