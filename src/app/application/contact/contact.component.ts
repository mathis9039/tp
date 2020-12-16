import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm : FormGroup = new FormGroup({
    sujet: new FormControl('', Validators.required),
    commentaire: new FormControl(),
  });
  //user: User; plus jamais il ne sera utile grâce au formGroup
  validMessage: string = "";
  service: any;
  couriel: string="";

  constructor(private router:Router) { }

  ngOnInit(): void 
  {

  }

  get form2()
  {
    return this.contactForm.controls;
  }
  onSubmit()
  {
    if(this.contactForm.valid)
    {
      this.couriel = ("mailto:mathis9039@gmail.com?subject=" + 
      this.contactForm.controls["sujet"].value + "&body=" + 
      this.contactForm.controls["commentaire"].value);
      window.location.href = this.couriel;
        this.contactForm.reset();
        this.router.navigateByUrl('/home');
    }
    else {
      this.validMessage="Please fill out the form before submitting!"
    }
  }
}
