import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    activeIcon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard', icon: 'assets/svg/finace.svg', activeIcon: 'assets/svg/finace-active.svg', class: '' },
    { path: '/wallets', title: 'Wallets', icon: 'assets/svg/wallets.svg', activeIcon: 'assets/svg/wallets-active.svg', class: '' },
    { path: '/documents', title: 'Documents', icon: 'assets/svg/documents.svg', activeIcon: 'assets/svg/documents-active.svg', class: '' },
    { path: '/verifications', title: 'Verifications', icon: 'assets/svg/verifications.svg', activeIcon: 'assets/svg/verifications-active.svg', class: '' },
    { path: '/partners', title: 'Partners', icon: 'assets/svg/partners.svg', activeIcon: 'assets/svg/partners-active.svg', class: '' },
    { path: '/users', title: 'Users', icon: 'assets/svg/users.svg', activeIcon: 'assets/svg/users-active.svg', class: '' }
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
    styleUrls: ['sidebar.component.scss']
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    currURL: string;
    constructor(private router: Router) { this.currURL = this.router.url; }
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
    urlRouter(path) {
        this.router.navigate([path]);
        setTimeout(() => {
            this.currURL = this.router.url;
        }, 10);
    }
}
