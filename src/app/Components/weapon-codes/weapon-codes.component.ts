import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-weapon-codes',
  templateUrl: './weapon-codes.component.html',
  styleUrls: ['./weapon-codes.component.css'],
})
export class WeaponCodesComponent implements OnInit {
  constructor(private router: Router) {}

  tabs: string[] = ['Type', 'Manufacturer', 'Rarity', 'Body', 'Barrel'];

  routes: string[] = ['weapons/codes/types', 'weapons/codes/manufacturers'];

  ngOnInit() {
    console.log(this.router.url);
  }

  isActive(r: number) {
    return {
      active: this.router.url === '/' + this.routes[r],
    };
  }
}
