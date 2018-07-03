import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import {User} from '../models/user';
import {UserService} from '../user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  user: User = new User();
  @ViewChild("myInput") inputEl: ElementRef;
  constructor(public api: UserService) { }

  ngOnInit() {
    this.inputEl.nativeElement.focus();
  }

  onChange(){
    this.api.findByDocument(this.user.document).subscribe((r)=>{
      console.log(r[0]);
      this.user = r[0];
    });
  }

  save(){
    this.api.updateById(this.user).subscribe((r)=>{
        console.log(r);
      },
      err=>{
        console.log("error")
      });
  }

}
