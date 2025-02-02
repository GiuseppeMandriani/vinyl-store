import { Component, NgModule, OnInit } from '@angular/core';
import { DiscogsService } from '../../services/discogs.service';
import { NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-vinyl-list',
  standalone: true,
  templateUrl: './vinyl-list.component.html',
  styleUrls: ['./vinyl-list.component.scss'],
  imports: [NgFor, RouterModule, FormsModule, ReactiveFormsModule]
})
export class VinylListComponent implements OnInit {
  vinyls: any[] = [];
  searchQuery: string = '';
  myForm: FormGroup;

  constructor(
    private discogsService: DiscogsService,
    private fb: FormBuilder,
  ) {
    this.myForm = this.fb.group({
      searchQuery: ['', Validators.required],
    });
  }

  ngOnInit(): void { }

  search(): void {
    console.log(this.searchQuery)
    if (this.searchQuery.trim()) {
      this.discogsService.searchVinyls(this.searchQuery).subscribe(data => {
        this.vinyls = data.results;
      });
    }
  }

  onSubmit() {
    if (this.myForm.valid) {
      console.log(this.myForm.value);  // Dati del form
      this.searchQuery = this.myForm.value.searchQuery.trim();

        this.discogsService.searchVinyls(this.searchQuery).subscribe(data => {
          this.vinyls = data.results;
        });
      

    }
  }

}
