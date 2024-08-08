import { Component  , OnInit} from '@angular/core';


import { ActivatedRoute } from '@angular/router';
import {DataServiceService} from '../../../Service/data-service.service';



@Component({
  selector: 'app-list-resource-details-2',
  templateUrl: './list-resource-details-2.component.html',
  styleUrl: './list-resource-details-2.component.sass'
})
export class ListResourceDetails2Component implements OnInit{
 

    level: string = '';

    data: any;
    InfoData: any[] = [];
    //Info: string = 'Tronc Commun'; // Set your filter value as needed
  constructor(private route: ActivatedRoute ,  private dataServiceService: DataServiceService,) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.level = params.get('level')!;

    this.dataServiceService.getData().subscribe(data => {
      this.data = data.books;
      console.log(this.data);
      if (this.data?.[0]?.Country) {
        this.InfoData = this.data[0].Country
          .flatMap((country: any) => country.Establishment || []) // Ensure Establishment is defined
          .flatMap((establishment: any) => establishment.ClassLevel || []) // Ensure ClassLevel is defined
          .flatMap((classLevel: any) => classLevel.Branch || []) // Ensure ClassLevel is defined
          .filter((branch: any) => branch.name === this.level) || [];
          console.log('Filtered InfoData:', this.InfoData);
          
        }
    });
  });
  }
}
