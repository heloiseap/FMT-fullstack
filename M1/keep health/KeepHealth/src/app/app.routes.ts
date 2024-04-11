import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DietComponent } from './diet/diet.component';
import { ProfileComponent } from './profile/profile.component';
import { DietDetailComponent } from './diet/diet-detail/diet-detail.component';
import { Component } from '@angular/core';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'cadastro',
        component: CadastroComponent
    },
    {   
        path: 'sidebar',
        component: SidebarComponent    
    },
    {
        path: 'dietas',
        children: [
            {path: '', component: DietComponent},
            {path: ':id', component: DietDetailComponent}
        ]
    },
    {
        path: 'perfil',
        component: ProfileComponent
    },
    {
        path: 'detalhes',
        component: DietDetailComponent
    }

];
//colocar detalhes como filha de dieta