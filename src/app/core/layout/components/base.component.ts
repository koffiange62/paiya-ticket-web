import { Component, computed, inject, OnDestroy, signal } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { Subscription } from "rxjs";

@Component({
    standalone: true,
    template: "",
})
export class BaseComponent implements OnDestroy {
    // This is a base component that can be extended by other components
    // It can contain common logic or properties that can be shared across multiple components

    // For example, you can define common methods, properties, or lifecycle hooks here
    // that can be used by all components that extend this base component.

    translateService = inject(TranslateService);
    languageSwticher = this.translateService.currentLang === "fr" ? signal("en" ): signal("fr");
    subscription: Subscription = new Subscription();

    constructor() {
        this.subscription.add(
            this.translateService.onLangChange.subscribe((event) => {
                event.lang === "fr" ? this.languageSwticher.set("en") : this.languageSwticher.set("fr");
            })
        );
    }
    

    
    changeLanguage = () => {
        if (this.translateService.currentLang === "fr") {
            this.translateService.use("en");
            this.translateService.setDefaultLang("en");
        } else {
            this.translateService.use("fr");
            this.translateService.setDefaultLang("fr");
        }
    };


    ngOnDestroy() {
        // Clean up the subscription to avoid memory leaks
        this.subscription.unsubscribe();
    }
    
}