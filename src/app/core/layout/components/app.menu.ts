import { Component, ElementRef, inject, linkedSignal, OnInit, Signal, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AppMenuitem } from './app.menuitem';
import { ModeService } from '../service/mode.service';
import { BaseComponent } from './base.component';
import { ModeEnum } from '@/shared/enums/mode.enum';
import { _ } from '@ngx-translate/core';

@Component({
    selector: '[app-menu]',
    standalone: true,
    imports: [CommonModule, AppMenuitem, RouterModule],
    template: `<div class="layout-menu-container" #menuContainer>
        <ul class="layout-menu">
            <ng-container *ngFor="let item of model(); let i = index">
                <li app-menuitem *ngIf="!item.separator" [item]="item" [index]="i" [root]="true"></li>
                <li *ngIf="item.separator" class="menu-separator"></li>
            </ng-container>
        </ul>
    </div>`
})
export class AppMenu extends BaseComponent implements OnInit{
    el: ElementRef = inject(ElementRef);

    @ViewChild('menuContainer') menuContainer!: ElementRef;

    modeService: ModeService = inject(ModeService);
    attendeeMenu : MenuItem[] = this.buildAttendeeMenuTranslation();
    organizerMenu : MenuItem[] = this.buildOrganizerMenuTranslation();
    model: Signal<MenuItem[]> = linkedSignal(() => {
        // This signal will return the menu items based on the current mode
        return this.modeService.mode() === ModeEnum.ATTENDEE && this.languageSwticher() ? this.attendeeMenu : this.organizerMenu;
    });


    constructor() {
        super();
    }

    ngOnInit() {
        this.subscription.add(
            this.translateService.onLangChange.subscribe((event) => {
                console.log('Langue changée:', this.languageSwticher);
                // rebuild the menus when the language changes
                this.attendeeMenu = this.buildAttendeeMenuTranslation();
                this.organizerMenu = this.buildOrganizerMenuTranslation();
                console.log('Attendee Menu:', this.attendeeMenu);
                console.log('Organizer Menu:', this.organizerMenu);
            })
        );
    }



    buildAttendeeMenuTranslation() : MenuItem[] {
        const attendeeMenu: MenuItem[] = [
            {
                label: this.translateService.instant(_('menus.attendee_menu.category.label')),
                icon: 'pi pi-th-large',
                items: [
                    {
                        label: this.translateService.instant(_('menus.attendee_menu.category.concert.label')),
                        icon: 'pi pi-sparkles',
                        routerLink: ['/']
                    },
                    {
                        label: this.translateService.instant(_('menus.attendee_menu.category.expo.label')),
                        icon: 'pi pi-lightbulb',
                        routerLink: ['/']
                    },
                    {
                        label: this.translateService.instant(_('menus.attendee_menu.category.social.label')),
                        icon: 'pi pi-moon',
                        routerLink: ['/']
                    },
                    {
                        label: this.translateService.instant(_('menus.attendee_menu.category.meating.label')),
                        icon: 'pi pi-users',
                        routerLink: ['/']
                    },
                    {
                        label: this.translateService.instant(_('menus.attendee_menu.category.sport.label')),
                        icon: 'pi pi-flag',
                        routerLink: ['/']
                    },
                    {
                        label: this.translateService.instant(_('menus.attendee_menu.category.religious.label')),
                        icon: 'pi pi-plus',
                        routerLink: ['/']
                    },
                ],
            },
            {
                label: 'Billeterie',
                icon: 'pi pi-bookmark',
                routerLink: ['/'],
                items: [
                    {
                        label: this.translateService.instant(_('menus.attendee_menu.ticket.my_tickets.label')),
                        icon: 'pi pi-ticket',
                        routerLink: ['/']
                    },
                    {
                        label: this.translateService.instant(_('menus.attendee_menu.ticket.my_refunds.label')),
                        icon: 'pi pi-money-bill',
                        routerLink: ['/']
                    },
    
                ]
            }
        ];
        return attendeeMenu;
    }

    buildOrganizerMenuTranslation() : MenuItem[] {
        const organizerMenu: MenuItem[] = [
            {
                label: this.translateService.instant(_('menus.organizer_menu.home.label')),
                icon: 'pi pi-home',
                routerLink: ['/'],
                tooltip: this.translateService.instant(_('menus.organizer_menu.home.description')),
            },
            {
                label: this.translateService.instant(_('menus.organizer_menu.menu.label')),
                icon: 'pi pi-sitemap',
                items: [
                    {
                        label: this.translateService.instant(_('menus.organizer_menu.menu.my_events.label')),
                        icon: 'pi pi-star',
                        routerLink: ['/']
                    },
                    {
                        label: this.translateService.instant(_('menus.organizer_menu.menu.ticket_control.label')),
                        icon: 'pi pi-verified',
                        routerLink: ['/']
                    },
                    {
                        label: this.translateService.instant(_('menus.organizer_menu.menu.sale_point.label')),
                        icon: 'pi pi-chart-bar',
                        routerLink: ['./']
                    },
                    {
                        label: this.translateService.instant(_('menus.organizer_menu.menu.billing.label')),
                        icon: 'pi pi-credit-card',
                        routerLink: ['./']
                    }
                ]
            }
        ];
        return organizerMenu;
    }
}
