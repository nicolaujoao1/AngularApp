import { Routes } from "@angular/router";
import { HomeComponent } from "./navegacao/home/home.component";
import { ContactoComponent } from "./instituicional/contacto/contacto.component";
import { SobreComponent } from "./instituicional/sobre/sobre.component";
import { DataBindingComponent } from "./demos/data-binding/data-binding.component";

export const rootRouterConfig: Routes =[
    {path: '', redirectTo: '/home', pathMatch:'full'},
    {path:'home',component: HomeComponent},
    {path:'contacto',component: ContactoComponent},
    {path:'sobre',component: SobreComponent},
    {path:'feature-data-binding',component: DataBindingComponent},
];