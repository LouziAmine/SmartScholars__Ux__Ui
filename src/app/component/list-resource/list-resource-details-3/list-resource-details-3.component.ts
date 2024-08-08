import { Component , OnInit} from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import {DataServiceService} from '../../../Service/data-service.service';

@Component({
  selector: 'app-list-resource-details-3',
  templateUrl: './list-resource-details-3.component.html',
  styleUrl: './list-resource-details-3.component.sass'
})
export class ListResourceDetails3Component implements OnInit{

  level: string = '';

    data: any;
    InfoData: any[] = [];
   
  constructor(private route: ActivatedRoute ,  private dataServiceService: DataServiceService) {}

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
          .flatMap((branch: any) => branch.Subjects || []) 
          .filter((subjects: any) => subjects.name === this.level) || [];
          console.log('Filtered InfoData:', this.InfoData);
          
        }
    });
  });
  }

}

