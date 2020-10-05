import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { oauth2 as SMART } from 'fhirclient';
import { FhirService } from '../services/fhir.service';


@Component({
  selector: 'app-launch',
  templateUrl: './launch.component.html',
  styleUrls: ['./launch.component.scss']
})
export class LaunchComponent implements OnInit {

  constructor(private fhirService: FhirService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // console.log('params: ', this.route.queryParams)
    // const patient = this.fhirService.getPatientInfo();
    // console.log('patient?: ', patient);
    this.receiveFHIRPatient();
  }

  receiveFHIRPatient() {
    SMART.init({
      iss: "https://launcher-develop.sandbox.alphora.com/v/r4/fhir",
      clientId: "6c12dff4-24e7-4475-a742-b08972c4ea27",
      scope: "patient/*.read launch launch/patient",
      completeInTarget: true
    }).then(function(client) {

      // localStorage.setItem('client', JSON.stringify(client))
      console.log('patient: ', client)
      return Promise.all([
        client.patient.read().then(function(patient) {
          console.log('patient: ', patient)
        }),
        client.request(`/MedicationRequest?patient=${client.patient.id}`, {
          resolveReferences: "medicationReference",
          pageLimit: 0,
          flat: true
        }).then(function(response) {
          console.log('med response: ', response);
        }),
        client.request(`/Observation?patient=${client.patient.id}`, {
          // resolveReferences: "medicationReference",
          pageLimit: 0,
          flat: true
        }).then(function(response) {
          console.log('obs response: ', response);
        }),
        client.request(`/QuestionnaireResponse?patient=${client.patient.id}`, {
          // resolveReferences: "medicationReference",
          pageLimit: 0,
          flat: true
        }).then(function(response) {
          console.log('Q response: ', response);
        }),
        client.request(`/Condition?patient=${client.patient.id}`, {
          // resolveReferences: "medicationReference",
          pageLimit: 0,
          flat: true
        }).then(function(response) {
          console.log('Condition response: ', response);
        })
      ])
    })
  }

}
