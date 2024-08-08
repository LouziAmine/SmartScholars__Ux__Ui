import { Component , OnInit  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {DataServiceService} from '../../../Service/data-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-resource-details-1',
  templateUrl: './list-resource-details-1.component.html',
  styleUrl: './list-resource-details-1.component.sass'
})
export class ListResourceDetails1Component  implements OnInit{

  data: any;
  levelEducationData: any[] = []; // Initialized to an empty array
  levelEducation: string = ''; // Initialized to an empty string
  ClassLevel: string = '';
  name: string = '';
  constructor(
    private route: ActivatedRoute,
    private dataServiceService: DataServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.levelEducation = params.get('level') || '';

      this.dataServiceService.getData().subscribe(data => {
        this.data = data.books;

        if (this.data?.[0]?.Country) {
          this.levelEducationData = this.data[0].Country
            .flatMap((country: any) => country.Establishment || [])
            .filter((establishment: any) => establishment.LevelEducation === this.levelEducation) || [];
        }
      });
    });
  }



  goToDetails(establishment: any): void {
    //console.log(establishment);
    //console.log(establishment.LevelEducation);
    this.router.navigate(['/Details__Branch', establishment]);
  }

 

       
      
}
