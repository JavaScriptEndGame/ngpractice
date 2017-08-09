import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProductListComponent } from 'app/products/product-list/product-list.component';
// import { PhotoModule } from 'app/photos/photo.module';
import { StarComponent } from 'app/shared/star/star.component';
import { routing } from 'app/app.routing';
import { AuthenticationModule } from 'app/authentication/authentication.module';
import { GlobalEventsManager } from 'app/shared/global-events-manager.service';
import { AddProductComponent } from 'app/products/addproduct/add-product.component';
import { NavBarComponent } from 'app/navbar/nav-bar.component';
import { ProductService } from 'app/products/product.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    StarComponent,
    AddProductComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    AuthenticationModule,
    // PhotoModule,
    routing
  ],
  providers: [
    GlobalEventsManager,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
