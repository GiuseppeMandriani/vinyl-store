import { Component, NgModule, OnInit } from '@angular/core';
import { DiscogsService } from '../../services/discogs.service';
import { NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from "../../shared-components/button/button.component";
import { IAppButton } from '../../shared-components/button/model/button.model';
import { SUBMIT_BUTTON_CONFIG } from './configs/button/button.configs';
import { IAppButtonEvent } from '../../shared-components/button/model/button-event.interface';


@Component({
  selector: 'app-vinyl-list',
  standalone: true,
  templateUrl: './vinyl-list.component.html',
  styleUrls: ['./vinyl-list.component.scss'],
  imports: [NgFor, RouterModule, FormsModule, ReactiveFormsModule, ButtonComponent]
})
export class VinylListComponent implements OnInit {
  public vinyls: any[] = [];
  public searchQuery: string = '';
  public myForm: FormGroup;

  public submitFormButtonConfig:IAppButton = {...SUBMIT_BUTTON_CONFIG}

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

  public getVinyl(event: IAppButtonEvent) {
    if (this.myForm.valid) {
      console.log(this.myForm.value);  // Dati del form
      this.searchQuery = this.myForm.value.searchQuery.trim();

        this.discogsService.searchVinyls(this.searchQuery).subscribe(data => {
          this.vinyls = data.results;
        });
      

    }
  }

}
