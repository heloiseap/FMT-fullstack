import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DietComponent } from './diet/diet.component';
import { ProfileComponent } from './profile/profile.component';
import { DietDetailComponent } from './diet-detail/diet-detail.component';

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
        component: DietComponent
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