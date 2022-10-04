import {
  Component,
  OnInit,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent implements OnInit {
 registrarUsuario: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registrarUsuario = this.fb.group({
      email:['', Validators.required],
      password:['', Validators.required],
      confirmpassword:['', Validators.required],


    })
  }

  ngOnInit(): void {
  }

  registrar() {
    const email = this.registrarUsuario.value.email;
    const  password= this.registrarUsuario.value.password;
    const confirmpassword= this.registrarUsuario.value.confirmpassword;
    console.log(email, password, confirmpassword);
  }
}
