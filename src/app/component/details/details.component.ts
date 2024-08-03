import { Component ,OnInit  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.sass'
})
export class DetailsComponent  implements OnInit{
  
  levelEducation!: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.levelEducation = this.route.snapshot.paramMap.get('levelEducation')!;
  }

}
