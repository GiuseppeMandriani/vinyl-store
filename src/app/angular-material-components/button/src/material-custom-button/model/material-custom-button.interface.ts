import { EventEmitter } from "@angular/core";

export interface IMaterialCustomButtonConfig {
    /** Etichetta del bottone */
    label: string;
  
    /** Variante del bottone di Angular Material */
    variant: 'button' | 'raised' | 'stroked' | 'flat' | 'icon' | 'fab' | 'mini-fab';
  
    /** Colore del bottone (primary, accent, warn) */
    color: 'primary' | 'accent' | 'warn';
  
    /** Stato disabilitato del bottone */
    disabled: boolean;
  
    /** Tipo di bottone (button, submit, reset) */
    type: 'button' | 'submit' | 'reset';
  
    /** Tabindex per la navigazione tramite tastiera */
    tabIndex?: number;
  
    /** Accessibilità: etichetta ARIA */
    ariaLabel?: string;
  
    /** Accessibilità: collega ad un altro elemento tramite aria-labelledby */
    ariaLabelledby?: string;
  
    /** Accessibilità: rende il bottone nascosto agli screen reader */
    ariaHidden?: boolean;
  
    /** Icona opzionale da mostrare prima del testo */
    icon?: string;
  
    /** Evento di clic sul bottone */
    clicked?: EventEmitter<Event>;
  }
  