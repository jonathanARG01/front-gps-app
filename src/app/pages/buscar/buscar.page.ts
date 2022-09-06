// Angular
import { Component     } from '@angular/core';
import { NavController } from '@ionic/angular';

// Interfaces
import { Vehiculo } from '../../interfaces/vehiculos.interface';

// Services
import { UsuarioService   } from '../../services/usuario.service';
import { VehiculosService } from '../../services/vehiculos.service';
import { UiServiceService } from '../../services/ui-service.service';



@Component({
  	selector: 'app-buscar',
  	templateUrl: './buscar.page.html',
  	styleUrls: ['./buscar.page.scss'],
})



export class BuscarPage {


	porPatente = '';
	porRut = '';

	buscarPor = 'patente';

	noHayPatente = '';
	noHayRut = '';

	vehiculo: Vehiculo;

	existeVehiculo = undefined;
	existeVehiculoAlerta = undefined;

	existeVehiculoPorRut = undefined;


	constructor( private usuarioService: UsuarioService,
				 private vehiculosService: VehiculosService,
				 private navCtrl: NavController,
				 private uiService: UiServiceService ) {}


	logout() {
		this.vehiculosService.paginaVehiculos = 0;
		this.usuarioService.logout();
	}


	buscarPorPatente() {

		this.vehiculosService.buscarVehiculoPorPatente( this.porPatente.toUpperCase() )
			.subscribe( (car) => {
				console.log( car );
				// eslint-disable-next-line @typescript-eslint/dot-notation
				console.log( car['ok'] );

				// eslint-disable-next-line @typescript-eslint/dot-notation
				if ( car['ok'] === false ) {
					this.existeVehiculo = false;
					this.existeVehiculoAlerta = true;
				} else {
					this.vehiculo = car;
					this.existeVehiculo = true;
					this.existeVehiculoAlerta = false;
				}

			});

		console.log( this.porPatente );

		this.noHayPatente = this.porPatente;
		this.porPatente = '';

		this.existeVehiculoPorRut = false;

	}


	buscarPorRut() {

		this.vehiculosService.buscarVehiculoPorRut( this.porRut.toUpperCase() )
			.subscribe( (car) => {
				console.log( car );
				// eslint-disable-next-line @typescript-eslint/dot-notation
				console.log( car['ok'] );

				// eslint-disable-next-line @typescript-eslint/dot-notation
				if ( car['ok'] === false ) {
					this.existeVehiculoPorRut = false;

					this.existeVehiculoAlerta = true;
				} else {
					this.vehiculo = car;
					this.existeVehiculoPorRut = true;

					this.existeVehiculoAlerta = false;
				}

			});

		console.log( this.porRut );

		this.noHayRut = this.porRut;
		this.porRut = '';

		this.existeVehiculo = false;

	}


	eliminarVehiculo( patente: string ) {

		this.vehiculosService.eliminarVehiculo( patente )
			.subscribe( resp => {

				console.log( resp );

				this.uiService.alertaInformativa('Vehículo eliminado');

				this.navCtrl.navigateRoot('/main/tabs/vehiculos', { animated: true });

			});

	}


}
