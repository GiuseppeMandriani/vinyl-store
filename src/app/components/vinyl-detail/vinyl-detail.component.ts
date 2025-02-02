import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { DiscogsService } from '../../services/discogs.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-vinyl-detail',
  templateUrl: './vinyl-detail.component.html',
  styleUrls: ['./vinyl-detail.component.css'],
  imports:[NgIf,RouterModule ]
})
export class VinylDetailComponent implements OnInit {
  vinyl: any;

  constructor(private route: ActivatedRoute, private discogsService: DiscogsService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    // if (id) {
    //   this.discogsService.searchVinyls(id).subscribe(data => {
    //     this.vinyl = data;
    //   });
    // }
  }
}
