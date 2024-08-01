import { Component,OnInit  } from '@angular/core';

import {DataServiceService} from '../../Service/data-service.service';

@Component({
  selector: 'app-list-resource',
  templateUrl: './list-resource.component.html',
  styleUrl: './list-resource.component.sass'
})
export class ListResourceComponent implements OnInit {
  data: any;

  constructor(private dataServiceService: DataServiceService) {}

  ngOnInit(): void {
    this.dataServiceService.getData().subscribe(data => {
      this.data = data.books;
    });
  }

}
