import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ProductComponent } from './pages/product/product.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { AdminProductComponent } from './pages/admin/admin-product/admin-product.component';
import { AdminProductAddComponent } from './pages/admin/admin-product-add/admin-product-add.component';
import { AdminProductEditComponent } from './pages/admin/admin-product-edit/admin-product-edit.component';

export const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'about', component: AboutPageComponent },
    { path: 'product', component: ProductComponent},
    { path: 'product/:id', component: ProductDetailComponent},
    { path: 'admin/product', component: AdminProductComponent},
    { path: 'admin/product/add', component: AdminProductAddComponent},
    { path: 'admin/product/edit/:id', component: AdminProductEditComponent},


];
