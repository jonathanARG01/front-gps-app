// Angular
import { Component, OnInit } from '@angular/core';

// Services
import { VehiculosService } from '../../services/vehiculos.service';
import { UsuarioService   } from '../../services/usuario.service';

// Interfaces
import { Vehiculo } from '../../interfaces/vehiculos.interface';

import * as XLSX from 'xlsx';



@Component({
	selector: 'app-vehiculos',
	templateUrl: './vehiculos.page.html',
	styleUrls: ['./vehiculos.page.scss']
})



export class VehiculosPage implements OnInit {


	vehiculos: Vehiculo[] = [];
	habilitado = true;


	fileName= 'vehiculos-quinta-gps.xlsx';


  	constructor( private vehiculosService: VehiculosService,
				 private usuarioService: UsuarioService ) { }


	ngOnInit() {

		this.siguientes();

	}


	recargar( event ) {

		this.siguientes( event, true );
		this.habilitado = true;
		this.vehiculos = [];

	}


	siguientes( event?, pull: boolean = false ) {

		this.vehiculosService.getVehiculos( pull )
		  	.subscribe( resp => {
				console.log( resp );
				this.vehiculos.push( ...resp.vehiculos );

				if ( event ) {
			  		event.target.complete();

			  		if ( resp.vehiculos.length === 0 ) {
						this.habilitado = false;
			  		}
				}

				this.habilitado = true;

		  	});

	}


	logout() {
		this.vehiculosService.paginaVehiculos = 0;
		this.usuarioService.logout();
	}


	descargarReporte(): void {

		console.log('Descargando...');

		/* pass here the table id */
		const element = document.getElementById('excel-table');
		const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

		/* generate workbook and add the worksheet */
		const wb: XLSX.WorkBook = XLSX.utils.book_new();
		XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

		/* save to file */
		XLSX.writeFile(wb, this.fileName);

	}


}
