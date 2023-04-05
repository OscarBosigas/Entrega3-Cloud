import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Evento } from '../eventos/evento';
import { EventosService } from '../eventos/eventos.service';
import { LogInService } from '../home/login.service';
import { Usuario } from '../home/usuario';
import { CrearService } from './crear.service';

@Component({
  selector: 'app-crear-evento',
  templateUrl: './crear-evento.component.html',
  styleUrls: ['./crear-evento.component.css']
})
export class CrearEventoComponent implements OnInit {

  constructor(private route: Router, private eventosService:EventosService, private crear: CrearService, private login:LogInService) { }

  Nombre = ''
  Lugar = ''
  Direccion = ''
  Fecha_Inicio = ''
  Fecha_Final = ''

  nombre = ''
  contrasena = ''
  id = 0;
  usuario : Usuario = new Usuario(0,"","")

  eventos: Array<Evento> = [new Evento(0,"Evento 1","Paipa","Calle 27","2022","2022",1,1,1)];

  listTipo = [
    {
      id:1,
      name:'Virtual'
    },
    {
      id:2,
      name:'Presencial'
    }
  ]

  selectTipo = this.listTipo[0];

  listCategorias = [
    {
      id:1,
      name:'Conferencia'
    },
    {
      id:2,
      name:'Seminario'
    },
    {
      id:3,
      name:'Congreso'
    },
    {
      id:4,
      name:'Curso'
    }
  ]

  selectCategoria = this.listCategorias[0];

  ngOnInit(): void {
  }

  agregarEvento(){ 
    this.eventosService.getEventos('').subscribe(res=>{
      this.eventos = res;
    });
    this.nombre = this.login.getNombre2();
    this.contrasena = this.login.getCon2();
    this.usuario = new Usuario(this.id, this.nombre, this.contrasena);
    this.login.getUsuario(this.usuario).subscribe(res=>{
    this.crear.crear(new Evento(0,this.Nombre,this.Lugar,this.Direccion,this.Fecha_Inicio,
      this.Fecha_Inicio,this.selectCategoria.id,this.selectTipo.id,res.id)).subscribe((data)=>{
      console.log(data)
   });
   alert('Evento creado')
    this.route.navigate(['lista'])
  }
  )}
}
