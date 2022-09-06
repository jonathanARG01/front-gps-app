// Angular
import { Component, OnInit } from '@angular/core';
import { NgForm 		   } from '@angular/forms';
import { NavController 	   } from '@ionic/angular';

// Services
import { UsuarioService   } from '../../services/usuario.service';
import { UiServiceService } from '../../services/ui-service.service';



@Component({
	selector: 'app-login',
	templateUrl: './login.page.html',
	styleUrls: ['./login.page.scss'],
})



export class LoginPage implements OnInit {


	loginUser = {
		email: 'jonathansw01@gmail.com',
		password: 'sw2001sw'
	};


	constructor( private usuarioService: UsuarioService,
				 private navCtrl: NavController,
				 private uiService: UiServiceService ) { }


	ngOnInit() {
  	}


	async login( fLogin: NgForm ) {

		if ( fLogin.invalid ) { return; }

		const valido = await this.usuarioService.login( this.loginUser.email, this.loginUser.password );

		// console.log( fLogin.valid );
		// console.log( this.loginUser );

		if ( valido ) {
			this.navCtrl.navigateRoot('/main/tabs/vehiculos', { animated: true });
		} else {
			this.uiService.alertaInformativa('Usuario y/o contraseña no son correctos');
		}

	}


}
