import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, signal, SimpleChanges, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LanguageOption } from './model/language-options.model';
import { BehaviorSubject, noop, Subscription, tap } from 'rxjs';

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [CommonModule, TranslateModule, FormsModule],
  templateUrl: './language-switcher.component.html',
  styleUrl: './language-switcher.component.scss'
})
export class LanguageSwitcherComponent implements OnInit {

  @Input() languages: LanguageOption[] = []; // Lingue disponibili
  @Input() set currentLang(value: string) {
    this.selectedLang = value;
  }

  @Output() changeLang = new EventEmitter<string>();

  public selectedLang: string = '';

  // public dataReady: boolean = false;
  // public dataReady$ = new BehaviorSubject<boolean>(false);

  public dataReadySignal$: WritableSignal<boolean> = signal(false);

  public isSelectOpen: boolean = false;

  protected subscriptions: Subscription[] = [];

  constructor(
    public translateService: TranslateService, 
  ) {

  }

  ngOnInit(): void {
    console.log(this.currentLang);
    // this.subscriptions.push(
    //   this.dataReady$.pipe(
    //     tap((dataReady)=> {
    //       this.dataReady = dataReady
    //     })
    //   ).subscribe(noop)
    // );

    // this.dataReady$.next(false);

    this.dataReadySignal$.set(true);

    this.translateLabels();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s?.unsubscribe())
  }

  

  public onLanguageChange(newLang: string): void {
    this.changeLang.emit(newLang);
  }

  public onFocus(selectElement: HTMLSelectElement): void {
    this.isSelectOpen = true; // Quando la select guadagna il focus, la lista si apre
  }

  public onBlur(selectElement: HTMLSelectElement): void {
    this.isSelectOpen = false; // Quando la select perde il focus, la lista si chiude
  }

  public translateLabels(){
    this.languages = this.languages.map(lang => ({
      ...lang,
      label: this.translateService.instant(lang.label) // Pre-traduzione
    }));

    this.dataReadySignal$.set(true);

    // this.dataReady$.next(true);

  }

}
