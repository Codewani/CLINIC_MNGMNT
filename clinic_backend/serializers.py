from rest_framework.serializers import ModelSerializer
from .models import *

#class PatientSerializer(ModelSerializer):
def patient_serializer(patients):
    data = []
    for patient in patients:
        data.append(
            {
                'patient_id': patient.patient_id,
                'name': patient.name,
                'initials': patient.initials,
                'sex': patient.sex,
                'address': patient.address,
                'post_code': patient.post_code,
                'admission': patient.admission,
                'DOB': patient.DOB,
                'ward_id': patient.ward_id,
                'next_of_kin': patient.next_of_kin
            }
        )
    return data
    
    # class Meta:
    #     model = Patient
    #     fields = ('patient_id', 'name', 'initials', 'sex', 'address', 'post_code', 'admission', 'DOB', 'ward_id', 'next_of_kin')

def ward_serializer(wards):
    data = []
    for ward in wards:
        data.append(
            {
                'ward_id': ward.ward_id,
                'ward_name': ward.ward_name,
                'number_beds': ward.number_beds,
                'nurse_in_charge': ward.nurse_in_charge,
                'ward_type': ward.ward_type,
            }
        )
    return data
    
# class WardSerializer(ModelSerializer):
#     class Meta:
#         model = Ward
#         fields = ('ward_id', 'ward_name', 'number_beds', 'nurse_in_charge', 'ward_type')
    