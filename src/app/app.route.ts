import { Routes } from "@angular/router";
import { HomeComponent } from "./navegacao/home/home.component";
import { ContactoComponent } from "./instituicional/contacto/contacto.component";
import { SobreComponent } from "./instituicional/sobre/sobre.component";
import { DataBindingComponent } from "./demos/data-binding/data-binding.component";
import { ListaProdutosComponent } from "./produtos/lista-produtos/lista-produtos.component";

export const rootRouterConfig: Routes =[
    {path: '', redirectTo: '/home', pathMatch:'full'},
    {path:'home',component: HomeComponent},
    {path:'contacto',component: ContactoComponent},
    {path:'sobre',component: SobreComponent},
    {path:'feature-data-binding',component: DataBindingComponent},
    {path:'produtos',component:ListaProdutosComponent},
    { path: 'produto-detalhe/:id', component: ListaProdutosComponent }
];