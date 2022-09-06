import { Injectable         } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment        } from '../../environments/environment.prod';
import { RespuestaVehiculos, Vehiculo } from '../interfaces/vehiculos.interface';
import { Observable 	    } from 'rxjs';
import { UsuarioService 	} from './usuario.service';



const URL = environment.url;



@Injectable({
  	providedIn: 'root'
})



export class VehiculosService {


	paginaVehiculos = 0;


	constructor( private httpCliente: HttpClient,
				 private usuarioService: UsuarioService ) { }


	// Obtener todos los Vehículos
	getVehiculos( pull: boolean = false ) {

		if ( pull ) {
			this.paginaVehiculos = 0;
		}

		this.paginaVehiculos ++;

		return this.httpCliente.get<RespuestaVehiculos>(`${ URL }/vehiculos/?pagina=${ this.paginaVehiculos }`);

	}


	// Obtener un Vehículo según su patente
	getVehiculoPorPatente( id: string ): Observable<Vehiculo> {

		return this.httpCliente.get<Vehiculo>(`${ URL }/vehiculos/vehiculo/?patente=${ id }`);

	}


	// Crear un Vehículo
	crearVehiculo( car: any ) {

		const headers = new HttpHeaders({
			'x-token': this.usuarioService.token
		});

		this.httpCliente.post(`${ URL }/vehiculos/`, car, { headers } )
			.subscribe( resp => {
				console.log( resp );
			});

	}


	// Buscar vehículos por patente
	buscarVehiculoPorPatente( patente: string ): Observable<Vehiculo> {

		return this.httpCliente.get<Vehiculo>(`${ URL }/vehiculos/vehiculo/?patente=${ patente }`);

	}


	// Buscar vehículos por rut
	buscarVehiculoPorRut( rut: string ): Observable<Vehiculo> {

		return this.httpCliente.get<Vehiculo>(`${ URL }/vehiculos/vehiculo/rut/?rut=${ rut }`);

	}


	eliminarVehiculo( patente: string ) {

		const headers = new HttpHeaders({
			'x-token': this.usuarioService.token
		});

		return this.httpCliente.delete<Vehiculo>(`${ URL }/vehiculos/${ patente }`, { headers });

	}


}
