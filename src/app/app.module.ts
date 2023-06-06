import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { WeaponCodesComponent } from './Components/weapon-codes/weapon-codes.component';
import { WeaponTypeComponent } from './Components/weapon-type/weapon-type.component';

const appRoutes: Routes = [
  { path: 'weapons/codes', component: WeaponCodesComponent },
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  declarations: [AppComponent, WeaponCodesComponent, WeaponTypeComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
