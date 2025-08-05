import { Component } from '@angular/core';
import { IconField } from 'primeng/iconfield';
import { InputIcon } from 'primeng/inputicon';
import { InputText } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';

@Component({
    standalone: true,
    selector: 'app-forgot-password',
    imports: [IconField, InputIcon, InputText, ButtonModule, RouterModule],
    template: ` <div class="bg-surface-100 dark:bg-surface-950 h-screen w-screen flex items-center justify-center">
        <div class="bg-surface-0 dark:bg-surface-900 py-16 px-8 sm:px-16 shadow flex flex-col w-11/12 sm:w-120" style="border-radius: 14px">
            <h1 class="font-bold text-2xl mt-0 mb-2">Forgot Password?</h1>
            <p class="text-muted-color mb-6">We need your email address for you can access your account, then we’ll send a recovery mail.</p>

            <p-icon-field class="mb-6">
                <p-inputicon class="pi pi-user" />
                <input pInputText type="text" placeholder="Email" class="w-full" />
            </p-icon-field>

            <p-button [routerLink]="['/']" label="Send Recovery Mail" styleClass="w-full"></p-button>
        </div>
    </div>`
})
export class ForgotPassword {}
