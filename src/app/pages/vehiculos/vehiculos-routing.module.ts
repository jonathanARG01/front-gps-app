// Angular
import { NgModule 			  } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Pages
import { VehiculosPage } from './vehiculos.page';



// Routes
const routes: Routes = [
  	{
    	path: '',
    	component: VehiculosPage
  	},
	{
	    path: 'vehiculo/:id',
	    loadChildren: () => import('./../vehiculo/vehiculo.module').then( m => m.VehiculoPageModule)
	}
];



@NgModule({
  	imports: [
		RouterModule.forChild(routes)
	],
  	exports: [
		RouterModule
	],
})



export class VehiculosPageRoutingModule {}
