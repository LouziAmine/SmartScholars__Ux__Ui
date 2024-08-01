import { Component , OnInit  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {DataServiceService} from '../../../Service/data-service.service';


@Component({
  selector: 'app-list-resource-details-1',
  templateUrl: './list-resource-details-1.component.html',
  styleUrl: './list-resource-details-1.component.sass'
})
export class ListResourceDetails1Component  implements OnInit{

  data: any;
  levelEducationData: any[] = []; // Initialized to an empty array
  levelEducation: string = ''; // Initialized to an empty string

  constructor(
    private route: ActivatedRoute,
    private dataServiceService: DataServiceService
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


}
