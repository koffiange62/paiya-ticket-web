import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Ripple } from 'primeng/ripple';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { InputNumber } from 'primeng/inputnumber';
import { AppConfigurator } from '@/layout/components/app.configurator';

@Component({
    selector: 'app-verification',
    standalone: true,
    imports: [ButtonModule, Ripple, RouterModule, FormsModule, InputNumber, AppConfigurator],
    template: ` <div class="bg-surface-100 dark:bg-surface-950 h-screen w-screen flex items-center justify-center">
            <div class="bg-surface-0 dark:bg-surface-900 py-16 px-8 sm:px-16 shadow flex flex-col w-11/12 sm:w-120" style="border-radius: 14px">
                <h1 class="font-bold text-2xl mt-0 mb-2">Verification Code</h1>
                <p class="text-muted-color mb-6">Enter code we sent in your mail!</p>

                <div class="flex items-center mb-6 gap-2">
                    <p-inputNumber inputStyleClass="w-full text-center" [maxlength]="1" (onInput)="focusOnNext(input2)"></p-inputNumber>
                    <p-inputNumber #input2 inputStyleClass="w-full text-center" [maxlength]="1" (onInput)="focusOnNext(input3)"></p-inputNumber>
                    <p-inputNumber #input3 inputStyleClass="w-full text-center" [maxlength]="1" (onInput)="focusOnNext(input4)"></p-inputNumber>
                    <p-inputNumber #input4 inputStyleClass="w-full text-center" [maxlength]="1"></p-inputNumber>
                </div>

                <button [routerLink]="['/']" pButton pRipple label="Verify" class="mb-4"></button>
                <span class="text-muted-color text-center">If you didn't get the mail? <span class="font-bold text-primary-500">Send code again</span></span>
            </div>
        </div>
        <app-configurator [simple]="true" />`
})
export class Verification {
    value: string = '';

    focusOnNext(inputEl: InputNumber) {
        inputEl.input.nativeElement.focus();
    }
}
