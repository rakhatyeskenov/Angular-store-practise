import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from './products';
import { CartService } from './cart.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isOpenCategory: boolean = false;
  firstCategory:string = 'Camera & Photo';
  secondCategory:string = 'Car & Vehicle Electronics';
  thirdCategory:string = 'Computers & Accessories';
  fourthCategory:string = 'GPS, Finders & Accessories';


  list: any = [
    {id: 1, firstCategory: 'Camera & Photo'},
    {id: 2, secondCategory: 'Car & Vehicle Electronics'},
    {id: 3, thirdCategory: 'Computers & Accessories'},
    {id: 4, fourthCategory:'GPS, Finders & Accessories'},
  ];
  



  showCategories() {
    this.isOpenCategory = !this.isOpenCategory;
  }

  constructor(private router: Router) {

  }


  jumpToCategoryList(val) { 
     this.router.navigate(['/category']);

    // if (val == 1)
    //   this.router.navigate(['/category']);
    // if (val == 2)
    //   this.router.navigate(['/category1']);
    // if (val == 3)
    //   this.router.navigate(['/category2']);
  }


}



/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/