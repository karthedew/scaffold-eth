import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from "./modules/material.module";
import { NgAntModule } from "./modules/ng-ant.module";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { HeaderComponent } from "./components/header/header.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './components/menu/menu.component';
import { HintsComponent } from './views/hints/hints.component';
import { SubgraphComponent } from './views/subgraph/subgraph.component';
import { FaucetComponent } from './components/faucet/faucet.component';
import { NetworkDisplayComponent } from './components/network-display/network-display.component';
import { AccountComponent } from './components/account/account.component';
import { WalletComponent } from './components/wallet/wallet.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    MenuComponent,
    HintsComponent,
    SubgraphComponent,
    FaucetComponent,
    NetworkDisplayComponent,
    AccountComponent,
    WalletComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    NgAntModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
