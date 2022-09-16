import {FormArray, FormControl, FormGroup} from "@angular/forms";
import {Observable, of} from "rxjs";

export class Course {
  name = '';
  description = '';
}

export interface School {
  name: string;
  address: Address;
  courses: Course[];
}

export interface Address {
  street: string;
  zip: string;
  city: string;
  country: string;
}

export function getTestSchool(): Observable<School> {
  return of({
    name: 'Gymnasium A',
    address: {
      street: 'Haupstraße 42a',
      zip: '71293',
      city: 'Hinterdupfing',
      country: 'DE'
    },
    courses: [
      {name: 'French', description: 'learn french like a pro'},
      {name: 'German', description: 'learn german from a native teacher'},
    ]
  });
}
