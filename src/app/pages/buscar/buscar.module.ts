import { NgModule 				 } from '@angular/core';
import { CommonModule 			 } from '@angular/common';
import { FormsModule 			 } from '@angular/forms';
import { RouterModule			 } from '@angular/router';
import { IonicModule 			 } from '@ionic/angular';
import { BuscarPageRoutingModule } from './buscar-routing.module';
import { BuscarPage 			 } from './buscar.page';



@NgModule({
  	imports: [
    	CommonModule,
    	FormsModule,
    	IonicModule,
    	BuscarPageRoutingModule,
		RouterModule
  	],
  	declarations: [
		BuscarPage
	]
})



export class BuscarPageModule {}
