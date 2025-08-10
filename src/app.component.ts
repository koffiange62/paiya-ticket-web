import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import translationFR from '../public/i18n/fr.json';
import translationEN from '../public/i18n/en.json';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterModule],
    template: `<router-outlet></router-outlet>`
})
export class AppComponent {
    constructor(private translate: TranslateService) {
        this.translate.addLangs(['fr', 'en']);
        this.translate.setTranslation('fr', translationFR);
        this.translate.setTranslation('en', translationEN);
        this.translate.setDefaultLang('fr');
        this.translate.use('fr');
    }
}
