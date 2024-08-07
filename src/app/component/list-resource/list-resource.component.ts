import { Component,OnInit  } from '@angular/core';

import {DataServiceService} from '../../Service/data-service.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-list-resource',
  templateUrl: './list-resource.component.html',
  styleUrl: './list-resource.component.sass'
})
export class ListResourceComponent implements OnInit {
  data: any;
  levelEducation: string = '';

 
  constructor(private dataServiceService: DataServiceService , private router: Router) {}

 ngOnInit(): void {
    this.dataServiceService.getData().subscribe(data => {
      this.data = data.books;
    });
  }



  
  goToDetails(establishment: any): void {
    if (establishment.LevelEducation) {
      this.router.navigate(['/Details__Component', establishment.LevelEducation]);
    }
  }
    


}
