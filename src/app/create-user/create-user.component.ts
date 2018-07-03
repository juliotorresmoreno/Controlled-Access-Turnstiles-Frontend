import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { User } from "../models/user";
import {UserService} from '../user.service';

@Component({
  selector: "app-create-user",
  templateUrl: "./create-user.component.html",
  styleUrls: ["./create-user.component.css"]
})
export class CreateUserComponent implements OnInit {
  user: User = new User();
  @ViewChild("myInput") inputEl: ElementRef;
  constructor(public api: UserService) {}

  ngOnInit() {
    this.inputEl.nativeElement.focus();
  }

  save() {
    this.api.add(this.user).subscribe((r)=>{
      console.log(r);
    },
    err=>{
      console.log("error")
    });
  }
}
