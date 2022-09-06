// Angular
import { NgModule     } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule  } from '@angular/forms';
import { IonicModule  } from '@ionic/angular';
import { RouterModule } from '@angular/router';

// Modules
import { VehiculoPageRoutingModule } from './vehiculo-routing.module';

// Pages
import { VehiculoPage } from './vehiculo.page';



@NgModule({
  	imports: [
    	CommonModule,
    	FormsModule,
    	IonicModule,
    	VehiculoPageRoutingModule,
		RouterModule
  	],
  	declarations: [
		VehiculoPage
	]
})



export class VehiculoPageModule {}
