import { Component, OnInit } from '@angular/core'
import { Cliente } from './cliente'
import { ClienteService } from './cliente.service'
import { Router, ActivatedRoute } from '@angular/router'
import Swal from 'sweetalert2'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent implements OnInit {
  public cliente: Cliente = new Cliente()
  public titulo = 'Crear Cliente'

  constructor(
    private clienteService: ClienteService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.cargarCliente()
  }

  cargarCliente(): void {
    this.activatedRoute.params.subscribe((params) => {
      const id = params['id']
      if (id) {
        this.clienteService
          .getCliente(id)
          .subscribe((cliente) => (this.cliente = cliente))
      }
    })
  }

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

  public update(): void {
    this.clienteService.update(this.cliente).subscribe((cliente) => {
      this.router.navigate(['/clientes'])

      Swal.fire({
        title: 'Cliente Actualizado',
        text: `Cliente ${cliente.nombre} actualizado con éxito`,
        icon: 'success',
      })
    })
  }
}
