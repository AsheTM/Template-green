import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlideOneComponent } from './slide-one/slide-one.component';
import { SlideTwoComponent } from './slide-two/slide-two.component';
import { SlideThreeComponent } from './slide-three/slide-three.component';
import { HeaderComponent } from './header/header.component';
import { SlideFourComponent } from './slide-four/slide-four.component';
import { SlideFiveComponent } from './slide-five/slide-five.component';
import { SlideSixComponent } from './slide-six/slide-six.component';

@NgModule({
  declarations: [
    AppComponent,
    SlideOneComponent,
    SlideTwoComponent,
    SlideThreeComponent,
    HeaderComponent,
    SlideFourComponent,
    SlideFiveComponent,
    SlideSixComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
