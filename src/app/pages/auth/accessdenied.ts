import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { AppConfigurator } from '@/layout/components/app.configurator';

@Component({
    selector: 'app-access',
    standalone: true,
    imports: [ButtonModule, RouterModule, RippleModule, AppConfigurator, ButtonModule],
    template: ` <app-configurator [simple]="true" />
        <div class="bg-surface-50 dark:bg-surface-950 h-screen w-screen flex items-center justify-center">
            <div class="bg-surface-0 dark:bg-surface-900 py-16 px-8 sm:px-16 shadow flex flex-col w-11/12 sm:w-120" style="border-radius: 14px">
                <h1 class="font-bold text-2xl mt-0 mb-2">ACCESS DENIED</h1>
                <p class="text-muted-color mb-6">You are not authorized to access this resource..</p>
                <img src="/demo/images/pages/auth/access-denied.svg" alt="access-denied" class="mb-6 self-center" />
                <p-button label="Go to Dashboard" routerLink="/" severity="warn" styleClass="w-full" />
            </div>
        </div>`
})
export class AccessDenied {}
