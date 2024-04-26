import { Component } from '@angular/core'
import { Cliente } from './cliente'

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
})
export class ClientesComponent {
  clientes: Cliente[] = [
    {
      id: 1,
      nombre: 'Andres',
      apellido: 'Guzman',
      email: 'andres@mail.com',
      createAt: '2017-12-11',
    },
    {
      id: 2,
      nombre: 'Mr. John',
      apellido: 'Doe',
      email: 'john@mail.com',
      createAt: '2017-11-11',
    },
    {
      id: 3,
      nombre: 'Linus',
      apellido: 'Torvals',
      email: 'linus@mail.com',
      createAt: '2017-11-12',
    },
    {
      id: 4,
      nombre: 'Rasmus',
      apellido: 'Lerdorf',
      email: 'rasmus@mail.com',
      createAt: '2017-11-13',
    },
    {
      id: 5,
      nombre: 'Erich',
      apellido: 'Gamma',
      email: 'erich@mail.com',
      createAt: '2017-11-14',
    },
    {
      id: 6,
      nombre: 'Richard',
      apellido: 'Helm',
      email: 'richard@mail.com',
      createAt: '2017-11-15',
    },
    {
      id: 7,
      nombre: 'Ralph',
      apellido: 'Johnson',
      email: 'ralph@mail.com',
      createAt: '2017-11-16',
    },
    {
      id: 8,
      nombre: 'Bombasto',
      apellido: 'Vlissides',
      email: 'bombasto@mail.com',
      createAt: '2017-11-17',
    },
    {
      id: 9,
      nombre: 'Dr James',
      apellido: 'Gosling',
      email: 'james@mail.com',
      createAt: '2017-11-18',
    },
    {
      id: 10,
      nombre: 'Magma',
      apellido: 'Lee',
      email: 'magma@mail.com',
      createAt: '2017-11-19',
    },
    {
      id: 11,
      nombre: 'Tornado',
      apellido: 'Roe',
      email: 'roe@mail.com',
      createAt: '2017-11-20',
    },
  ]
}