import { Component, EventEmitter, Input, Output, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NG_VALUE_ACCESSOR, FormControl, ReactiveFormsModule, ControlValueAccessor } from '@angular/forms';
import { BehaviorSubject, noop, Subscription, tap } from 'rxjs';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent implements ControlValueAccessor{

  @Input() initialValue: any;
  @Input() id: string = '';
  @Input() type: string = 'text';
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() disabled: boolean = false;
  @Input() readonly: boolean = false;
  @Input() required: boolean = false;
  @Input() name: string = '';
  @Input() ariaLabel: string = '';
  @Input() ariaDescribedby?: string;
  @Input() ariaInvalid?: boolean;
  @Input() errorMessage?: string;
  
  @Output() inputChange = new EventEmitter<string>();

  public value: string = '';

  public errorMessage$ = new BehaviorSubject<boolean>(false);
  public showErrorMessage: boolean = false;


  protected subscriptions: Subscription[] = [];


  ngOnInit(): void {
    this.subscriptions.push(
      this.errorMessage$.pipe(
        tap((showErrorMessage)=> {
          this.showErrorMessage = showErrorMessage
        })
      ).subscribe(noop)
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s?.unsubscribe())
  }

  onChange = (value: string) => {};
  onTouched = () => {};

  onInputChange(event: Event) {
    const newValue = (event.target as HTMLInputElement).value;
    this.value = newValue;
    this.onChange(newValue);
    this.onTouched();
    this.validateInput(); // Chiamata alla validazione ogni volta che cambia il valore
    this.inputChange.emit(newValue); // Emetti evento personalizzato
  }
  

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  public validateInput() {
    if (this.required && !this.value.trim()) {
      this.errorMessage$.next(true);
    } else {
      this.errorMessage$.next(false);
    }
  }

}

