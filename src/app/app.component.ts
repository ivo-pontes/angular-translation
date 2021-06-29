import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent
{
  title = 'translate';
  languageList = [
    {code: 'en', label: 'English'},
    {code: 'pt', label: 'Português'}
  ];

  constructor(private translate: TranslateService)
  {
    translate.setDefaultLang('en');
  }

  changeLang(lang: string)
  {
    this.translate.use(lang);
  }
}
