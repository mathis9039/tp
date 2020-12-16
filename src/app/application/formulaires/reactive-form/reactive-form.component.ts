import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReactiveService } from '../../services/reactive.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  userForm : FormGroup = new FormGroup({
    prenom: new FormControl('', [Validators.required, Validators.minLength(4)]),
    motdepasse: new FormControl('', Validators.required),
    methodepaiment: new FormControl('cash', Validators.required),
    commentaire: new FormControl(),
  });
  //user: User; plus jamais il ne sera utile grâce au formGroup
  validMessage: string = "";

  constructor(private service: ReactiveService, private router:Router) { }

  ngOnInit(): void 
  {

  }

  get form2()
  {
    return this.userForm.controls;
  }

  onSubmit()
  {
    if(this.userForm.valid)
    {
      this.service.save(this.userForm.value).subscribe(data => {
        this.userForm.reset();
        this.router.navigateByUrl('/home');
      })
    }
    else {
      this.validMessage="Please fill out the form before submitting!"
    }
  }

}
