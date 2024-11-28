from rest_framework.serializers import ModelSerializer
from .models import Patient, Ward

class PatientSerializer(ModelSerializer):
    class Meta:
        model = Patient
        fields = [
            'patient_id', 'name', 'initials', 'sex', 'address', 
            'post_code', 'admission', 'DOB', 'ward', 'next_of_kin'
        ]

class WardSerializer(ModelSerializer):
    class Meta:
        model = Ward
        fields = [
            'ward_id', 'ward_name', 'number_beds', 
            'nurse_in_charge', 'ward_type'
        ]
