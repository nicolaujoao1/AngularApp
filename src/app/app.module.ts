import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{RouterModule} from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

import { registerLocaleData } from '@angular/common';

import localePt from '@angular/common/locales/pt-AO';
registerLocaleData(localePt)

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './navegacao/home/home.component';
import { MenuComponent } from './navegacao/menu/menu.component';
import { FooterComponent } from './navegacao/footer/footer.component';
import { SobreComponent } from './instituicional/sobre/sobre.component';
import { ContactoComponent } from './instituicional/contacto/contacto.component';
import { rootRouterConfig } from './app.route';
import { DataBindingComponent } from './demos/data-binding/data-binding.component';
import { ProdutoService } from './services/produtos/produtos.service';
import { ListaProdutosComponent } from './produtos/lista-produtos/lista-produtos.component';
import { CadastroComponent } from './demos/reactiveforms/cadastro/cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    FooterComponent,
    SobreComponent,
    ContactoComponent,
    DataBindingComponent,
    ListaProdutosComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rootRouterConfig),
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ProdutoService,
    {provide:APP_BASE_HREF,useValue:'/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
