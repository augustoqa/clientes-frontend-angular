import { Injectable } from '@angular/core'
import { Cliente } from './cliente'
import { CLIENTES } from './clientes.json'
import { Observable, of } from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  private urlEndPoint = 'http://localhost:8080/api/clientes'
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' })

  constructor(private http: HttpClient) {}

  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.urlEndPoint)
  }

  create(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.urlEndPoint, cliente, {
      headers: this.httpHeaders,
    })
  }

  getCliente(id: number): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.urlEndPoint}/${id}`)
  }

  update(cliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(
      `${this.urlEndPoint}/${cliente.id}`,
      cliente,
      {
        headers: this.httpHeaders,
      }
    )
  }

  delete(id: number): Observable<Cliente> {
    return this.http.delete<Cliente>(`${this.urlEndPoint}/${id}`, {
      headers: this.httpHeaders,
    })
  }
}
