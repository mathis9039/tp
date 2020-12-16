import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { account } from '../../models/user';
import { ReactiveService } from '../../services/reactive.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  id:number;
  user:account;

  updateUserForm : FormGroup ;
  //user: User; plus jamais il ne sera utile grâce au formGroup
  validMessage: string = "";

  constructor(private service: ReactiveService, private router:Router, private route: ActivatedRoute) { }

  ngOnInit(): void 
  {
    this.id = this.route.snapshot.params['id'];

    this.service.findById(this.id).subscribe(res => {
      this.user = res;
    }, (error => {
      console.log(error);
    }));

    this.updateUserForm = new FormGroup({
      prenom: new FormControl('', [Validators.required, Validators.minLength(4)]),
      motdepasse: new FormControl('', Validators.required),
      methodepaiment: new FormControl('cash', Validators.required),
      commentaire: new FormControl(),
    });
  }

  get form3()
  {
    return this.updateUserForm.controls;
  }

  updateUser()
  {
    if(this.updateUserForm.valid)
    {
      this.service.update(this.id, this.updateUserForm.value).subscribe(() => {
        this.router.navigateByUrl('crud');
      }, (error => {
        console.log(error);
      }))
    }
    else {
      this.validMessage="Please fill out the form before submitting!"
    }
  }

}
