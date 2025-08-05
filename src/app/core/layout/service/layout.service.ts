import { Injectable, effect, signal, computed, Signal, WritableSignal } from '@angular/core';
import { Subject } from 'rxjs';
import { MenuItem } from 'primeng/api';

export type MenuMode = 'static' | 'overlay' | 'slim-plus' | 'slim';

export interface layoutConfig {
    preset: string;
    primary: string;
    surface: string | undefined | null;
    darkTheme: boolean;
    menuMode: string;
    layoutTheme: string;
}

export interface LayoutState {
    staticMenuDesktopInactive: boolean;
    overlayMenuActive: boolean;
    configSidebarVisible: boolean;
    staticMenuMobileActive: boolean;
    menuHoverActive: boolean;
    rightMenuActive: boolean;
    topbarMenuActive: boolean;
    sidebarActive: boolean;
    activeMenuItem: any;
    overlaySubmenuActive: boolean;
}

export interface MenuChangeEvent {
    key: string;
    routeEvent?: boolean;
}

export interface TabCloseEvent {
    tab: MenuItem;
    index: number;
}

@Injectable({
    providedIn: 'root'
})
export class LayoutService {
    _config: layoutConfig = {
        preset: 'Aura',
        primary: 'emerald',
        surface: null,
        darkTheme: false,
        menuMode: 'slim',
        layoutTheme: 'colorScheme'
    };

    _state: LayoutState = {
        staticMenuDesktopInactive: false,
        overlayMenuActive: false,
        configSidebarVisible: false,
        staticMenuMobileActive: false,
        menuHoverActive: false,
        rightMenuActive: false,
        topbarMenuActive: false,
        sidebarActive: false,
        activeMenuItem: null,
        overlaySubmenuActive: false
    };

    layoutConfig = signal<layoutConfig>(this._config);

    layoutState = signal<LayoutState>(this._state);

    private configUpdate = new Subject<layoutConfig>();

    private overlayOpen = new Subject<any>();

    private menuSource = new Subject<MenuChangeEvent>();

    private resetSource = new Subject();

    private tabOpen = new Subject<MenuItem>();

    private tabClose = new Subject<TabCloseEvent>();

    tabs: MenuItem[] = [];

    menuSource$ = this.menuSource.asObservable();

    resetSource$ = this.resetSource.asObservable();

    configUpdate$ = this.configUpdate.asObservable();

    overlayOpen$ = this.overlayOpen.asObservable();

    tabOpen$ = this.tabOpen.asObservable();

    tabClose$ = this.tabClose.asObservable();

    isSidebarActive: Signal<boolean> = computed(() => this.layoutState().overlayMenuActive || this.layoutState().staticMenuMobileActive);

    isDarkTheme: Signal<boolean> = computed(() => this.layoutConfig().darkTheme);

    isOverlay: Signal<boolean> = computed(() => this.layoutConfig().menuMode === 'overlay');

    isSlim: Signal<boolean> = computed(() => this.layoutConfig().menuMode === 'slim');

    isSlimPlus: Signal<boolean> = computed(() => this.layoutConfig().menuMode === 'slim-plus');

    isHorizontal: Signal<boolean> = computed(() => this.layoutConfig().menuMode === 'horizontal');

    transitionComplete: WritableSignal<boolean> = signal<boolean>(false);

    isSidebarStateChanged = computed(() => {
        const layoutConfig = this.layoutConfig();
        return layoutConfig.menuMode === 'horizontal' || layoutConfig.menuMode === 'slim' || layoutConfig.menuMode === 'slim-plus';
    });

    private initialized = false;

    constructor() {
        effect(() => {
            const config = this.layoutConfig();
            if (config) {
                this.onConfigUpdate();
            }
        });

        effect(() => {
            const config = this.layoutConfig();

            if (!this.initialized || !config) {
                this.initialized = true;
                return;
            }

            this.handleDarkModeTransition(config);
        });

        effect(() => {
            this.isSidebarStateChanged() && this.reset();
        });
    }

    private handleDarkModeTransition(config: layoutConfig): void {
        if ((document as any).startViewTransition) {
            this.startViewTransition(config);
        } else {
            this.toggleDarkMode(config);
            this.onTransitionEnd();
        }
    }

    private startViewTransition(config: layoutConfig): void {
        const transition = (document as any).startViewTransition(() => {
            this.toggleDarkMode(config);
        });

        transition.ready
            .then(() => {
                this.onTransitionEnd();
            })
            .catch(() => {});
    }

    toggleDarkMode(config?: layoutConfig): void {
        const _config = config || this.layoutConfig();
        if (_config.darkTheme) {
            document.documentElement.classList.add('app-dark');
        } else {
            document.documentElement.classList.remove('app-dark');
        }
    }

    private onTransitionEnd() {
        this.transitionComplete.set(true);
        setTimeout(() => {
            this.transitionComplete.set(false);
        });
    }

    onMenuToggle() {
        if (this.isOverlay()) {
            this.layoutState.update((prev) => ({ ...prev, overlayMenuActive: !this.layoutState().overlayMenuActive }));

            if (this.layoutState().overlayMenuActive) {
                this.overlayOpen.next(null);
            }
        }

        if (this.isDesktop()) {
            this.layoutState.update((prev) => ({ ...prev, staticMenuDesktopInactive: !this.layoutState().staticMenuDesktopInactive }));
        } else {
            this.layoutState.update((prev) => ({ ...prev, staticMenuMobileActive: !this.layoutState().staticMenuMobileActive }));

            if (this.layoutState().staticMenuMobileActive) {
                this.overlayOpen.next(null);
            }
        }
    }

    isDesktop() {
        return window.innerWidth > 991;
    }

    isMobile() {
        return !this.isDesktop();
    }

    onConfigUpdate() {
        this._config = { ...this.layoutConfig() };
        this.configUpdate.next(this.layoutConfig());
    }

    onMenuStateChange(event: MenuChangeEvent) {
        this.menuSource.next(event);
    }

    reset() {
        this.resetSource.next(true);
    }

    onOverlaySubmenuOpen() {
        this.overlayOpen.next(null);
    }

    showProfileSidebar() {
        this.layoutState.update((prev) => ({ ...prev, profileSidebarVisible: true }));
    }

    showConfigSidebar() {
        this.layoutState.update((prev) => ({ ...prev, configSidebarVisible: true }));
    }

    hideConfigSidebar() {
        this.layoutState.update((prev) => ({ ...prev, configSidebarVisible: false }));
    }

    onTabOpen(value: MenuItem) {
        this.tabOpen.next(value);
    }

    openTab(value: MenuItem) {
        this.tabs = [...this.tabs, value];
    }

    onTabClose(value: MenuItem, index: number) {
        this.tabClose.next({ tab: value, index: index });
    }

    closeTab(index: number) {
        this.tabs.splice(index, 1);
        this.tabs = [...this.tabs];
    }
}
