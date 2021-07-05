import { Routes } from '@angular/router';
import { DashboardComponent } from 'app/pages/dashboard/dashboard.component';
import { WalletsComponent } from 'app/pages/wallets/wallets.component';
import { VerificationsComponent } from 'app/pages/verifications/verifications.component';
import { DocumentsComponent } from 'app/pages/documents/documents.component';
import { PartnersComponent } from 'app/pages/partners/partners.component';
import { UsersComponent } from 'app/pages/users/users.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'wallets',        component: WalletsComponent },
    { path: 'verifications',  component: VerificationsComponent },
    { path: 'documents',      component: DocumentsComponent },
    { path: 'partners',       component: PartnersComponent },
    { path: 'users',          component: UsersComponent }
];
