import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder} from "@angular/forms";
import {Address, Course, getTestSchool} from "./index";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  schoolForm = this.fb.group({
    name: '',
    // foo: '',
    address: this.fb.group<Address>({
      street: '',
      zip: '',
      city: '',
      country: ''
    }),
    courses: this.fb.array<Course>([])
  });

  constructor(private fb: FormBuilder) {
  }

  get coursesFormArray(): FormArray {
    return <FormArray>this.schoolForm.controls.courses;
  }

  ngOnInit(): void {
    // this could come from an api:
    getTestSchool().subscribe((school) => {
      this.schoolForm.patchValue(school);
      school.courses.forEach((course) => {
        this.addCourse(course);
      });
    });
  }

  addCourse(course = new Course()) {
    this.coursesFormArray.push(this.fb.group<Course>(course));
  }

  deleteCourse(idx: number) {
    this.coursesFormArray.removeAt(idx);
  }

  onSubmit() {
    console.log('saved school!', this.schoolForm.value);
  }
}
