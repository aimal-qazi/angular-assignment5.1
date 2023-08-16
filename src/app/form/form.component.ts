import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../list/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  userForm!: FormGroup;
  constructor(public service: DataService, private router: Router) {}
  ngOnInit(): void {
    this.userForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      dob: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      class: new FormControl('', [Validators.required]),
      parentEmail: new FormControl('', [Validators.required]),
      desc: new FormControl('', [Validators.required]),
      password: new FormControl(''),
      address: new FormControl(''),
      contact: new FormControl(''),
    });
  }

  onSubmit() {
    let data = this.userForm.getRawValue();
    this.service.userData.push(data);
    this.userForm.reset();
    this.router.navigate(['list']);
  }
}
