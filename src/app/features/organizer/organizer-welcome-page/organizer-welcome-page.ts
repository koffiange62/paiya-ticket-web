import { CommonModule } from '@angular/common';
import { Component, effect } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TableModule } from "primeng/table";
import { Badge } from "primeng/badge";
import { SplitButtonModule } from 'primeng/splitbutton';
import { MenuItem } from 'primeng/api';
import { _, TranslatePipe } from '@ngx-translate/core';
import { BaseComponent } from '@/core/layout/components/base.component';

@Component({
  selector: 'ptw-organizer-welcome-page',
  imports: [CommonModule, TableModule, Badge, SplitButtonModule, TranslatePipe],
  templateUrl: './organizer-welcome-page.html',
  styleUrl: './organizer-welcome-page.scss'
})
export class OrganizerWelcomePage extends BaseComponent {

    data : any[] = [];
    items: MenuItem[] = [];

    constructor() {
        super();
        this.items = this.buildItems();
        this.data = this.buildData();
    }

    lang = this.languageSwticher();
    effetLanguageSwitcher = effect(() => {
        this.lang = this.languageSwticher();
        this.items = this.buildItems();
        this.data = this.buildData();
    });

    

    buildItems() {
        return [
            {
                label: this.translateService.instant(_('button.delete')),
                icon: 'pi pi-trash'
            },
            {
                label: this.translateService.instant(_('button.publish')),
                icon: 'pi pi-megaphone'
            }
        ];
    }

    buildData() {
        return [
            { title : 'Create your first event', image: '/layout/images/event-item-horizontal-placeholder.png', createdAt: '2024-08-08', status: 'Draft', link: '/organizer/events/create' },
        
            { title : 'Set up your payment account', image: '/layout/images/event-item-horizontal-placeholder.png', createdAt: '2024-07-31', status: 'Not set up', link: '/organizer/settings/payments' },
        
            { title : 'Add your bank account', image: '/layout/images/event-item-horizontal-placeholder.png', createdAt: '2024-07-25', status: 'Not set up', link: '/organizer/settings/bank' }
        ];
    }
}
