import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


import { AppComponent } from './app.component';
import { CreateUserComponent } from './create-user/create-user.component';
import {FormsModule} from '@angular/forms';
import { UpdateUserComponent } from './update-user/update-user.component';
import { HttpClientModule } from "@angular/common/http";
import {UserService} from "./user.service";
import {ApiService} from "./api.service";

const appRoutes: Routes = [
  { path: '', component: CreateUserComponent },
  { path: 'update-user', component: UpdateUserComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    CreateUserComponent,
    UpdateUserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    ),
    FormsModule,
    HttpClientModule
  ],
  providers: [
    UserService,
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
