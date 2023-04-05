import { Injectable } from '@angular/core'
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs'
import { Tipo } from '../eventos/tipo'
import { Evento } from '../eventos/evento'

@Injectable({
    providedIn: 'root'
})

export class CrearService {

    constructor (private http: HttpClient) {}

    public crear(evento:Evento):Observable<Evento>{
        return this.http.post<Evento>('http://localhost:5000/crear',evento)
    }

}