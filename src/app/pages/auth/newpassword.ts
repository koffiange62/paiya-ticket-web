import { Component } from '@angular/core';
import { IconField } from 'primeng/iconfield';
import { InputIcon } from 'primeng/inputicon';
import { Password } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { Ripple } from 'primeng/ripple';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-new-password',
    standalone: true,
    imports: [IconField, InputIcon, Password, ButtonModule, RouterModule, FormsModule],
    template: `
        <div class="bg-surface-100 dark:bg-surface-950 h-screen w-screen flex items-center justify-center">
            <div class="bg-surface-0 dark:bg-surface-900 py-16 px-8 sm:px-16 shadow flex flex-col w-11/12 sm:w-120" style="border-radius: 14px">
                <h1 class="font-bold text-2xl mt-0 mb-2">New Password</h1>
                <p class="text-muted-color mb-6">Enter your new password.</p>

                <p-icon-field class="mb-6">
                    <p-inputicon class="pi pi-key z-20" />
                    <p-password id="password" placeholder="Password" [(ngModel)]="value1" styleClass="w-full" [inputStyle]="{ paddingLeft: '2.5rem' }" inputStyleClass="w-full" [toggleMask]="true"></p-password>
                </p-icon-field>

                <p-icon-field class="mb-6">
                    <p-inputicon class="pi pi-key z-20" />
                    <p-password id="password" placeholder="Confirm Password" [(ngModel)]="value2" styleClass="w-full" [inputStyle]="{ paddingLeft: '2.5rem' }" inputStyleClass="w-full" [toggleMask]="true"></p-password>
                </p-icon-field>

                <p-button [routerLink]="['/']" styleClass="w-full" label="Submit"></p-button>
            </div>
        </div>
    `
})
export class NewPassword {
    value1: string = '';

    value2: string = '';
}
