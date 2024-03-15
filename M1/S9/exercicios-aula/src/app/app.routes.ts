import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    // {
    //     path: 'card',
    //     component: CardComponent
    // },
    //  card esta linkado a home
    {
        path: 'login',
        component: LoginComponent
    }
];
