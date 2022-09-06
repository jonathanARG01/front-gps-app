// Angular
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute	   } from '@angular/router';
import { NavController     } from '@ionic/angular';

// Interfaces
import { Vehiculo } from '../../interfaces/vehiculos.interface';

// Services
import { VehiculosService } from '../../services/vehiculos.service';
import { UsuarioService   } from '../../services/usuario.service';
import { UiServiceService } from '../../services/ui-service.service';



@Component({
	selector: 'app-vehiculo',
	templateUrl: './vehiculo.page.html',
	styleUrls: ['./vehiculo.page.scss'],
})



export class VehiculoPage implements OnInit {


	vehiculo!: Vehiculo;


	constructor( private activatedRoute: ActivatedRoute,
				 private usuarioService: UsuarioService,
				 private vehiculosService: VehiculosService,
				 private navCtrl: NavController,
				 private uiService: UiServiceService ) { }


	ngOnInit() {

		this.activatedRoute.params
			.subscribe( ({ id }) => {

				console.log( id );

				this.vehiculosService.getVehiculoPorPatente( id )
					.subscribe( car => {
						this.vehiculo = car;
					});

			});

			// .pipe(
			// 	switchMap( ({ id }) => this.vehiculosService.getVehiculoPorPatente( id ) )
			// )
			// .subscribe( vehiculo => this.vehiculo = vehiculo );

	}


	logout() {
		this.vehiculosService.paginaVehiculos = 0;
		this.usuarioService.logout();
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
