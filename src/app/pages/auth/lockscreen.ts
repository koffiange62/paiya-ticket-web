import { Component } from '@angular/core';
import { IconField } from 'primeng/iconfield';
import { InputIcon } from 'primeng/inputicon';
import { InputText } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { Ripple } from 'primeng/ripple';
import { RouterModule } from '@angular/router';

@Component({
    standalone: true,
    selector: 'app-lockscreen',
    imports: [IconField, InputIcon, InputText, ButtonModule, Ripple, RouterModule],
    template: ` <div class="bg-surface-100 dark:bg-surface-950 h-screen w-screen flex items-center justify-center">
        <div class="bg-surface-0 dark:bg-surface-900 py-16 px-8 sm:px-16 shadow flex flex-col w-11/12 sm:w-120" style="border-radius: 14px">
            <h1 class="font-bold text-2xl mt-0 mb-2">VERONA</h1>
            <p class="text-muted-color mb-6">Welcome back!</p>

            <div class="flex items-center justify-between mb-6">
                <div class="flex">
                    <img src="/layout/images/avatar.png" class="mr-4" style="width: 52px; height: 52px" />
                    <div class="flex flex-col justify-center gap-1">
                        <span class="font-bold text-color">Wade Warren</span>
                        <span class="text-muted-color">Designer</span>
                    </div>
                </div>
                <button pButton pRipple icon="pi pi-sign-out" label="Log out" class="p-button-text" iconPos="right"></button>
            </div>

            <p-icon-field class="mb-6">
                <p-inputicon class="pi pi-key" />
                <input pInputText type="password" placeholder="Password" class="w-full" />
            </p-icon-field>

            <button [routerLink]="['/']" pButton pRipple label="Unlock"></button>
        </div>
    </div>`
})
export class LockScreenComponent {}
