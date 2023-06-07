import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CommonFormComponent } from './Components/Common/common-form/common-form.component';
import { InvalidFieldComponent } from './Components/Common/invalid-field/invalid-field.component';
import { WeaponCodesComponent } from './Components/weapon-codes/weapon-codes.component';
import { WeaponTypeComponent } from './Components/weapon-type/weapon-type.component';
import { CommonFormService } from './Services/Forms/common-form.service';
import { ValidationService } from './Services/validation.service';

const appRoutes: Routes = [
  {
    path: 'weapons/codes',
    component: WeaponCodesComponent,
    children: [{ path: 'types', component: WeaponTypeComponent }],
  },
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [ValidationService, CommonFormService],
  declarations: [
    AppComponent,
    WeaponCodesComponent,
    WeaponTypeComponent,
    InvalidFieldComponent,
    CommonFormComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
