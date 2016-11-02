import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MdlModule } from 'angular2-mdl';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TriggerService } from './services/trigger.service';
import { TriggerComponent } from './trigger/trigger.component';
import { SwiperModule } from 'angular2-useful-swiper';
import { ImagesComponent } from './images/images.component';

@NgModule({
  declarations: [
    AppComponent,
    TriggerComponent,
    ImagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdlModule,
    SwiperModule,
    RouterModule.forRoot([
      { path: '', component: AppComponent },
      { path: 'trigger/:id', component: TriggerComponent },
      { path: 'index.html', component: AppComponent }
    ])
  ],
  providers: [TriggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
