import { Component, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button'; // Non è necessario importare MatButton direttamente
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common'; // CommonModule è sufficiente, NgClass, NgIf, e NgSwitch sono già inclusi in CommonModule

@Component({
  selector: 'material-custom-button',
  standalone: true,
  imports: [TranslateModule, MatButtonModule, MatIconModule, CommonModule], // CommonModule include NgIf e altre direttive comuni
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './material-custom-button.component.html',
  styleUrls: ['./material-custom-button.component.scss'],
})
export class MaterialCustomButtonComponent {
  @Input() label: string = '';

  /** Variante del bottone di Angular Material */
  @Input() variant: 'button' | 'raised' | 'stroked' | 'flat' | 'icon' | 'fab' | 'mini-fab' = 'raised';

  /** Colore del bottone (primary, accent, warn) */
  @Input() color: 'primary' | 'accent' | 'warn' = 'primary';

  /** Disabilita il bottone */
  @Input() disabled: boolean = false;

  /** Tipo di bottone: button, submit, reset */
  @Input() type: 'button' | 'submit' | 'reset' = 'button';

  /** Tabindex per la navigazione da tastiera */
  @Input() tabIndex: number = 0;

  /** Accessibilità: etichetta ARIA */
  @Input() ariaLabel?: string;

  /** Accessibilità: collega ad un altro elemento con aria-labelledby */
  @Input() ariaLabelledby?: string;

  /** Accessibilità: rende il bottone nascosto agli screen reader */
  @Input() ariaHidden: boolean = false;

  /** Icona opzionale da mostrare prima del testo */
  @Input() icon?: string;

  /** Emette un evento quando il bottone viene cliccato */
  @Output() clicked = new EventEmitter<Event>();

  /** Handler per l'evento click */
  onClick(event: Event): void {
    if (!this.disabled) {
      this.clicked.emit(event);
    }
  }
}
