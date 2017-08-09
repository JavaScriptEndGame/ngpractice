import { Routes, RouterModule } from '@angular/router';

import { AuthenticationGuard, LoginComponent } from 'app/authentication';
import { ProductListComponent } from 'app/products/product-list/product-list.component';

const appRoutes: Routes = [
      { path: 'products', component: ProductListComponent, canActivate: [AuthenticationGuard]  },
      { path: 'photos', loadChildren: './photos/photo.module#PhotoModule' },
      { path: 'login', component: LoginComponent },
      { path: '', redirectTo: 'products', pathMatch: 'full' },
      { path: '**', redirectTo: 'products', pathMatch: 'full' },
];

export const routing = RouterModule.forRoot(appRoutes);
