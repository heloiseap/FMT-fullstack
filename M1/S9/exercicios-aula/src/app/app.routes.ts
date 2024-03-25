import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    // {
    //     path: 'card',
    //     component: CardComponent
    // },
    //  card esta linkado a home agora
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'cadastro',
        component: CadastroComponent
    }
];
