import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-usergroup',
  templateUrl: './usergroup.component.html',
  styleUrls: ['./usergroup.component.css']
})
export class UsergroupComponent implements OnInit {

  constructor(public router: Router,
    public authser: DataService) { }

  ngOnInit(): void {
  }


  @Input() userGroup = {
    group_id: '',
    user_id: '',


  };

  post() {

    this.authser.addUserGroup(this.userGroup.group_id,this.userGroup.user_id).subscribe(res => {
      console.log(res);

      alert("User Added");

    })
  }
}
