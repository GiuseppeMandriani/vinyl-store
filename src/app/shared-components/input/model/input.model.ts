import { FormControl } from "@angular/forms";

export type InputType =
    | 'text'
    | 'email'
    | 'password'
    | 'number'
    | 'tel'
    | 'url'
    | 'search'
    | 'date'
    | 'time'
    | 'datetime-local'
    | 'month'
    | 'week'
    | 'color'
    | 'file';

export interface IAppInput {
    id?: string; // Identificativo univoco per l'elemento input
    name?: string; // Nome dell'input (usato nei form)
    value?: string | number; // Valore dell'input
    type?: string | InputType;
    label?: string; // Etichetta dell'input
    placeholder?: string; // Placeholder dell'input
    disabled?: boolean; // Input disabilitato
    readonly?: boolean; // Input in sola lettura
    required?: boolean; // Input obbligatorio
    helperText?: string; // Testo di aiuto sotto l'input
    errorMessage?: string; // Messaggio di errore da mostrare in caso di errore
    hasError?: boolean; // Indica se l'input ha un errore (es. per validazione)
    autofocus?: boolean; // Autofocus all'apertura del componente
    ariaLabel?: string; // Attributo aria-label per accessibilità
    ariaDescribedby?: string; // Attributo aria-describedby per riferimenti a descrizioni accessibili
    ariaInvalid?: boolean; // Attributo aria-invalid per indicare errori di validazione
    formControl?: FormControl;

    // // Evento chiamato quando il valore cambia
    // onChange?: (value: string | number) => void;

    // // Evento chiamato quando il focus si attiva sull'input
    // onFocus?: () => void;

    // // Evento chiamato quando il focus viene rimosso dall'input
    // onBlur?: () => void;
}

