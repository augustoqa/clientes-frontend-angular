import { Component } from '@angular/core'
import { Cliente } from './cliente'
import { ClienteService } from './cliente.service'
import { Router } from '@angular/router'
import Swal from 'sweetalert2'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent {
  public cliente: Cliente = new Cliente()
  public titulo = 'Crear Cliente'

  constructor(private clienteService: ClienteService, private router: Router) {}

  public create(): void {
    this.clienteService.create(this.cliente).subscribe((cliente) => {
      this.router.navigate(['/clientes'])

      Swal.fire({
        title: 'Nuevo cliente',
        text: `Cliente ${cliente.nombre} creado con exito!`,
        icon: 'success',
      })
    })
  }
}
