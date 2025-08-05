import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { AppConfigurator } from '@/layout/components/app.configurator';

@Component({
    selector: 'app-error',
    imports: [ButtonModule, RippleModule, RouterModule, ButtonModule, AppConfigurator],
    standalone: true,
    template: `<app-configurator [simple]="true" />
        <div class="bg-surface-100 dark:bg-surface-950 h-screen w-screen flex items-center justify-center">
            <div class="bg-surface-0 dark:bg-surface-900 py-16 px-8 sm:px-16 shadow flex flex-col w-11/12 sm:w-120" style="border-radius: 14px">
                <h1 class="font-bold text-2xl mt-0 mb-2">ERROR</h1>
                <p class="text-muted-color mb-6">Unexpected error happened. Resource is not available.</p>
                <img src="/demo/images/pages/auth/error.svg" alt="error" class="mb-6 self-center" />
                <p-button label="Go to Dashboard" [routerLink]="['/']" styleClass="w-full" />
            </div>
        </div>`
})
export class Error {}
