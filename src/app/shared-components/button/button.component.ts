import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IAppButton } from './model/button.model';
import { DEFAULT_CONFIG } from './configs/button.config';
import { IAppButtonEvent } from './model/button-event.interface';
import { ButtonType } from './enum/button-type.enum';
import { ButtonColor } from './enum/button-color.enum';

@Component({
  selector: 'app-button',
  standalone: true,
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {

  @Input() public type?: ButtonType | string = ButtonType.BUTTON;
  @Input() public disabled?: boolean = false;
  @Input() public color?: ButtonColor | string = ButtonColor.PRIMARY;
  @Input() public label: string = 'Clicca';
  @Input() public id?: string = 'id-button';
  @Input() public ariaLabel?: string = '';


  @Output() onClick = new EventEmitter<IAppButtonEvent>();



  public buttonClassDynamic: string = 'button'; 

  ngOnInit() {

      if(this.color) {
        this.buttonClassDynamic = `button button-${this.color}`
      }

    
  }

  public _handleButtonClick(){
    const elementEmit: IAppButtonEvent = {
      id: this.id
    }
    this.onClick.emit()

  }


}

