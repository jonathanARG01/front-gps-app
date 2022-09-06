
export interface RespuestaVehiculos {
    ok: 	   boolean;
    pagina:    number;
    vehiculos: Vehiculo[];
}


export interface Vehiculo {
	created:	       Date;
    _id?:        	   string;
	patente:   		   string;
	marca:     		   string;
	modelo:    		   string;
	anio:      		   number;
	color:     		   string;
	gps:       		   string;
	numeroMotor:       string;
	numeroVin:         string;
	sistemaRastreo:    string;
	fechaVencimiento:  Date;
	apagadoMotor:      string;
	inmovilizador:     string;
	nombreConductor:   string;
	apellidoConductor: string;
	rutConductor: 	   string;
	movilConductor:    string;
}


export interface Usuario {
    _id?: 	 string;
    nombre?: string;
    email?:  string;
}
