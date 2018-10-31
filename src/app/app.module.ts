import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';

//Angular Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';


// AngularFire Imports
import { AngularFireModule } from 'angularfire2';
// import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
// Component Imports

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ClientDetailsComponent } from './components/client-details/client-details.component';
import { AddclientComponent } from './components/addclient/addclient.component';
import { EditclientComponent } from './components/editclient/editclient.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SettingsComponent } from './components/settings/settings.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CoverComponent } from './components/cover/cover.component';
import { BookserviceComponent } from './components/bookservice/bookservice.component';
import { OilchangeComponent } from './components/oilchange/oilchange.component';
import { WithwashingComponent } from './components/withwashing/withwashing.component';


// Service Imports
import { ClientService } from './services/client.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { ClientpageComponent } from './components/clientpage/clientpage.component';

const appRoutes: Routes = [
    {path:'dashboard', component:DashboardComponent, canActivate:[AuthGuard]},
    //{path:'', component:CoverComponent},
    {path:'register', component:RegisterComponent},
    {path:'login', component:LoginComponent},
    {path:'addclient',component:AddclientComponent, canActivate:[AuthGuard]},
    {path:'client-details',component:ClientDetailsComponent,canActivate:[AuthGuard]},
    {path:'',component:CoverComponent},
    {path:'bookservice', component:BookserviceComponent},
    {path:'oilchange', component:OilchangeComponent},
    {path:'withwashing', component:WithwashingComponent}
];

export const firebaseConfig = {
  apiKey: "AIzaSyDdnV4CXlcwgifYttXlViD0CbTPpTyl3S0",
    authDomain: "projectcopy-cd057.firebaseapp.com",
    databaseURL: "https://projectcopy-cd057.firebaseio.com",
    projectId: "projectcopy-cd057",
    storageBucket: "projectcopy-cd057.appspot.com",
    messagingSenderId: "919025978986"
}



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ClientsComponent,
    ClientDetailsComponent,
    AddclientComponent,
    EditclientComponent,
    NavbarComponent,
    SidebarComponent,
    LoginComponent,
    RegisterComponent,
    SettingsComponent,
    PageNotFoundComponent,
    CoverComponent,
    BookserviceComponent,
    OilchangeComponent,
    WithwashingComponent,
    ClientpageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    FlashMessagesModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [
    AngularFireAuth,
    AngularFireDatabase,
    ClientService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
