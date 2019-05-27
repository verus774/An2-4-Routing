import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';

import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';

import { AppRoutingModule } from './app-routing.module';
import { TasksModule } from './tasks/tasks.module';
import { CoreModule } from './core/core.module';
import {UsersModule} from './users/users.module';
import { AdminModule } from './admin/admin.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    LayoutModule,
    CoreModule,
    AdminModule,
    UsersModule,
    TasksModule,
    AppRoutingModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
