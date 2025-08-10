import { Component, inject } from '@angular/core';
import { LayoutService } from '../service/layout.service';


@Component({
    standalone: true,
    selector: '[app-footer]',
    template: ` <div class="footer-start">
            <img src="/layout/images/logo-dark.png" alt="logo" />
            <span class="app-name">PaiyaTicket</span>
        </div>
        <div class="footer-right">
            <span>© Propulsé par <u><b>koffi.dev</b></u></span>
        </div>`,
    host: {
        class: 'layout-footer'
    }
})
export class AppFooter {
    layoutService = inject(LayoutService);
}
