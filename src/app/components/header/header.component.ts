import {Component} from '@angular/core';
import {TranslocoService} from '@ngneat/transloco';
import {MatSelectChange} from '@angular/material/select';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  languages = [
    {value: 'uk', viewValue: 'Українська', flag: 'ua'},
    {value: 'ru', viewValue: 'Русский', flag: 'ru'},
    {value: 'en', viewValue: 'English', flag: 'us'}
  ];
  lang: string;
  selectedLanguage = this.languages[0].value;

  constructor(
    private translocoService: TranslocoService
  ) {
  }

  onSelectionChange($event: MatSelectChange) {
    this.translocoService.setActiveLang($event.value);
  }
}
