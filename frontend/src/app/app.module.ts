import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularHalModule } from 'angular4-hal'
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExternalService } from './_services/external.service';
import { ProductComponent } from './product/product.component';
import { ModuleComponent } from './module/module.component';
import { ModuleDirective } from './directives/module.directive';
import { PlanComponent } from './plan/plan.component';
import { SubscriptionComponent } from './subscription/subscription.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ModuleComponent,
    ModuleDirective,
    PlanComponent,
    SubscriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularHalModule.forRoot()
  ],
  providers: [
    { provide: 'ExternalConfigurationService', useClass: ExternalService  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
