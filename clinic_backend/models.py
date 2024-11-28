from django.db import models
from django.utils import timezone


class Ward(models.Model):
    ward_id = models.CharField(max_length = 4, primary_key = True)
    ward_name = models.CharField(max_length = 25)
    number_beds = models.IntegerField()
    nurse_in_charge = models.CharField(max_length = 20)
    ward_type = models.CharField(max_length = 20, null=True)

    class Meta:
        db_table = "wards" 


class Patient(models.Model):
    patient_id = models.CharField(max_length = 2, primary_key=True)
    name = models.CharField(max_length = 30)
    initials = models.CharField(max_length = 2)
    sex = models.CharField(max_length = 1)
    address = models.CharField(max_length = 30)
    post_code = models.CharField(max_length = 3)
    admission = models.DateField()
    DOB = models.DateField()
    ward = models.ForeignKey(Ward, on_delete=models.CASCADE)
    next_of_kin = models.CharField(max_length = 30, null = True)

    class Meta:
        db_table = "patients" 