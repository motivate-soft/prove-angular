import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


export interface RouteInfo {
    path: string;
    subMenu: boolean;
    title: string;
    icon: string;
    activeIcon: string;
    class: string;
    id?: string;
    parent?: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard', icon: 'assets/svg/finace.svg',
        activeIcon: 'assets/svg/finace-active.svg', class: '', subMenu: false, id: 'dashboard' },
    { path: '/wallets', title: 'Wallets', icon: 'assets/svg/wallets.svg',
        activeIcon: 'assets/svg/wallets-active.svg', class: '', subMenu: false, id: 'wallets' },
    { path: '/wallets', title: 'Wallet groups', icon: 'assets/svg/wallets.svg',
        activeIcon: 'assets/svg/wallets-active.svg', class: '', subMenu: true, parent: 'wallets' },
    { path: '/documents', title: 'Documents', icon: 'assets/svg/documents.svg',
        activeIcon: 'assets/svg/documents-active.svg', class: '', subMenu: false, id: 'documents' },
    { path: '/verifications', title: 'Verifications', icon: 'assets/svg/verifications.svg',
        activeIcon: 'assets/svg/verifications-active.svg', class: '', subMenu: false, id: 'verifications' },
    { path: '/partners', title: 'Partners', icon: 'assets/svg/partners.svg',
        activeIcon: 'assets/svg/partners-active.svg', class: '', subMenu: false, id: 'partners' },
    { path: '/users', title: 'Users', icon: 'assets/svg/users.svg',
        activeIcon: 'assets/svg/users-active.svg', class: '', subMenu: false, id: 'users' }
];

@Component({
    moduleId: module.id,
    // tslint:disable-next-line: component-selector
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
    styleUrls: ['sidebar.component.scss']
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    currURL: string;
    selectedMenuId: any;
    constructor(private router: Router) { this.currURL = this.router.url; }
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
    urlRouter(item) {
        if (!item.subMenu) {
            this.selectedMenuId = item.id;
        }
        this.router.navigate([item.path]);
        setTimeout(() => {
            this.currURL = this.router.url;
        }, 10);
    }
}
