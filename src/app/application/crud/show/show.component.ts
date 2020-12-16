import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { account } from '../../models/user';
import { ReactiveService } from '../../services/reactive.service';

@Component({
  selector: 'app-update',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  id:number;
  user:account;

  showUserForm : FormGroup ;

  constructor(private service: ReactiveService, private router:Router, private route: ActivatedRoute) { }

  ngOnInit(): void 
  {
    this.id = this.route.snapshot.params['id'];

    this.service.findById(this.id).subscribe(res => {
      this.user = res;
    }, (error => {
      console.log(error);
    }));

    this.showUserForm = new FormGroup({
      prenom: new FormControl('', [Validators.required, Validators.minLength(4)]),
      motdepasse: new FormControl('', Validators.required),
      methodepaiment: new FormControl('cash', Validators.required),
      commentaire: new FormControl(),
    });
  }

  get form3()
  {
    return this.showUserForm.controls;
  }
}
