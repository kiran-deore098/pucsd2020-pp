import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserContact } from '../share/usercontact.model';
import { UsercontactService } from '../share/usercontact.service';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent implements OnInit {
  usercontacts: UserContact[];
  searchData = [];
  searchForm: FormGroup;
  flag: boolean;
  constructor(private formBuilder: FormBuilder,
    private ucs: UsercontactService,
    private router: Router) {
    this.flag = false;
  }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      searchtext: ['', Validators.required],
    });
  }
  isInvalid(name: string) {
    const control = this.searchForm.get(name);
    return control.invalid && control.dirty;
  }
  onSubmit() {
    this.flag = false;
    this.searchData = [];
    const serchId = parseInt((this.searchForm.value).searchtext);
    this.usercontacts = this.ucs.getall();
    this.usercontacts.forEach(element => {
      if (element.id === serchId) {
        this.searchData.push(element);
      }
    });
    console.log('this.searchData.length', this.searchData.length)
    if (this.searchData.length == 0) {
      console.log('true')
      this.flag = true;
    }
  }

  onCancel() {
    this.router.navigate(['']);
  }

}
