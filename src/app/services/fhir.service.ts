import { Injectable } from '@angular/core';
import * as FHIR from 'fhirclient';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FhirService {

  constructor() { }

  getPatientInfo() {
    // this.http.get(url).subscribe(
    //   (response) => { return response }
    // )
    // FHIR.oauth2.authorize()
    const launchContext = environment.launchContext;
    // console.log('context: ', launchContext);
    FHIR.oauth2.authorize(launchContext).then(
      response => {
        console.log('response: ', response)
      }
    );
    // this.http.get(url).toPromise()
    // .then( (launchContext) => {
    //   return FHIR.oauth2.authorize(launchContext)
    // }).catch( (error) => {
    //   console.log(error)
    // })
  }

}
