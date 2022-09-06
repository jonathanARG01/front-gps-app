// Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Pages
import { TabsPage } from './tabs.page';



// Routes
const routes: Routes = [
  	{
    	path: 'tabs',
    	component: TabsPage,
    	children: [
      		{
        		path: 'buscar',
        		loadChildren: () => import('../buscar/buscar.module').then(m => m.BuscarPageModule)
      		},
		    {
		        path: 'vehiculos',
		        loadChildren: () => import('../vehiculos/vehiculos.module').then(m => m.VehiculosPageModule)
		    },
		    {
		        path: 'agregar',
		        loadChildren: () => import('../agregar/agregar.module').then(m => m.AgregarPageModule)
		    },
		    {
		        path: '',
		        redirectTo: '/tabs/buscar',
		        pathMatch: 'full'
		    }
    	]
  	},
  	{
    	path: '',
    	redirectTo: '/tabs/buscar',
    	pathMatch: 'full'
  	}
];



@NgModule({
	imports: [
		RouterModule.forChild(routes)
	],
})



export class TabsPageRoutingModule {}
