import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { HeaderComponent } from "./header/header.component";
import { SearchComponent } from "./search/search.component";
import { HomeComponent } from "./home/home.component";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";
import { Routes, RouterModule } from "@angular/router";
import { SignuppComponent } from "./signupp/signupp.component";
import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule } from "ngx-toastr";
import { BangComponent } from "./bang/bang.component";
import { AhmedabadComponent } from './ahmedabad/ahmedabad.component';

const Router: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "signupp", component: SignuppComponent },
  { path: "ahmedabad", component: AhmedabadComponent },
  { path: "bang", component: BangComponent },
  { path: "**", component: PagenotfoundComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    SearchComponent,
    HomeComponent,
    PagenotfoundComponent,
    SignuppComponent,
    BangComponent,
    AhmedabadComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(Router),
    FormsModule,

    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot()
  ], // ToastrModule added
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
