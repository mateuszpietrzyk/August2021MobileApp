import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'funfacts',
    loadChildren: () => import('./funfacts/funfacts.module').then( m => m.FunfactsPageModule)
  },
  {
    path: 'diets',
    loadChildren: () => import('./diets/diets.module').then( m => m.DietsPageModule)
  },
  {
    path: 'gadgets',
    loadChildren: () => import('./gadgets/gadgets.module').then( m => m.GadgetsPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
