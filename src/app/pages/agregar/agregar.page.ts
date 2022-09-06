// Angular
import { Component } from '@angular/core';

// Services
import { VehiculosService } from '../../services/vehiculos.service';
import { UsuarioService   } from '../../services/usuario.service';
import { UiServiceService } from '../../services/ui-service.service';



@Component({
  	selector: 'app-agregar',
  	templateUrl: './agregar.page.html',
  	styleUrls: ['./agregar.page.scss'],
})



export class AgregarPage {


	vehiculo = {
		patente: 		   '',
		marca: 			   '',
		modelo: 		   '',
		anio: 			   '',
		color: 			   '',
		gps: 			   '',
		numeroMotor:       '',
		numeroVin:         '',
		sistemaRastreo:    '',
		fechaVencimiento:  '',
		apagadoMotor:      '',
		inmovilizador:     '',
		nombreConductor:   '',
		apellidoConductor: '',
		rutConductor: 	   '',
		movilConductor:    ''
	};

	constructor( private vehiculosService: VehiculosService,
				 private usuarioService: UsuarioService,
				 private uiService: UiServiceService ) {}


	crearVehiculo() {

		console.log(this.vehiculo);

		this.vehiculosService.crearVehiculo( this.vehiculo );

		this.vehiculo = {
			patente: 		   '',
			marca: 			   '',
			modelo: 		   '',
			anio: 			   '',
			color: 			   '',
			gps: 			   '',
			numeroMotor:       '',
			numeroVin:         '',
			sistemaRastreo:    '',
			fechaVencimiento:  '',
			apagadoMotor:      '',
			inmovilizador:     '',
			nombreConductor:   '',
			apellidoConductor: '',
			rutConductor: 	   '',
			movilConductor:    ''
		};

		this.uiService.alertaInformativa('Vehículo creado');

	}


	logout() {
		this.vehiculosService.paginaVehiculos = 0;
		this.usuarioService.logout();
	}

}
