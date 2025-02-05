import { Component, NgModule, OnInit } from '@angular/core';
import { DiscogsService } from '../../services/discogs.service';
import { NgFor, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from "../../shared-components/button/component/button.component";
import { IAppButton } from '../../shared-components/button/model/button.model';
import { RESET_BUTTON_CONFIG, SUBMIT_BUTTON_CONFIG } from './configs/button/button.configs';
import { IAppButtonEvent } from '../../shared-components/button/model/button-event.interface';
import { IAppInput } from '../../shared-components/input/model/input.model';
import { INPUT_SEARCH_CONFIG } from './configs/input/input.config';
import { InputComponent } from '../../shared-components/input/component/input.component';
import { ItemCardComponent } from '../../shared-components/item-card/item-card.component';


@Component({
  selector: 'app-vinyl-list',
  standalone: true,
  templateUrl: './vinyl-list.component.html',
  styleUrls: ['./vinyl-list.component.scss'],
  imports: [NgFor, NgIf, RouterModule, FormsModule, ReactiveFormsModule, ButtonComponent, InputComponent, ItemCardComponent]
})
export class VinylListComponent implements OnInit {
  public vinyls: any[] = [];
  // public searchQuery: string = '';

  public myForm: FormGroup = new FormGroup({
    search: new FormControl('')
  })
  public search = new FormControl();

  public searchRequest: string = '';

  // BUTTONS CONFIG

  public submitFormButtonConfig: IAppButton = { ...SUBMIT_BUTTON_CONFIG };
  public resetFormButtonConfig: IAppButton = { ...RESET_BUTTON_CONFIG };

  // INPUTS CONFIG

  public searchInputConfig: IAppInput = { ...INPUT_SEARCH_CONFIG };

  constructor(
    private discogsService: DiscogsService,
    private fb: FormBuilder,
  ) {
    this.myForm = this.fb.group({
      search: ['', Validators.required],
    });
  }

  ngOnInit(): void { }

  public getVinyl(event: IAppButtonEvent) {
    if (this.myForm.valid) {
      console.log(this.myForm.value);  // Dati del form 
      this.searchRequest = this.myForm.value.search.trim();

      this.discogsService.searchVinyls(this.searchRequest).subscribe(data => {
        this.vinyls = data.results;
      });
    }
  }

  public _handleinputChange(evt: any) {
    console.log(evt);
  }

}
