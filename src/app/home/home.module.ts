import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { HeaderComponent } from '../core/components/header/header/header.component';
import { SectionsComponent } from '../core/components/sections/sections/sections.component';
import { FooterComponent } from '../core/components/footer/footer/footer.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, HeaderComponent, SectionsComponent, FooterComponent]
})
export class HomePageModule {}
