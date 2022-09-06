// Angular
import { NgModule 			  } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Pages
import { VehiculoPage } from './vehiculo.page';



// Routes
const routes: Routes = [
  	{
    	path: '',
    	component: VehiculoPage
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



export class VehiculoPageRoutingModule {}
