import { Component, OnInit } from '@angular/core';
import { account } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  listUsers:Array<account>;
  public headElements = ["ID", "prénom", "méthode de paiement", "Operations"];
  idSupprimer :number;
positionDansTableau :number;



  constructor(private service: UserService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }
  
  getAllUsers():void
  {
    this.service.findAll().subscribe(result => {   // => Qu'est ce que je fait avec
      this.listUsers=result
    }, (error) => {
      console.log(error);
    })
  }

  public delete()
  {
      this.service.deleteById(this.idSupprimer).subscribe(result => {
        this.listUsers.splice(this.positionDansTableau, 1);
      }, (error) => {
        console.log(error);
      })
  }
  getId(id:number, position:number)
  {
    this.idSupprimer = id;
    this.positionDansTableau = position
  }
}
