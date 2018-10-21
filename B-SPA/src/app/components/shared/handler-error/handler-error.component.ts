import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-handler-error',
  templateUrl: './handler-error.component.html',
  styleUrls: ['./handler-error.component.css']
})
export class HandlerErrorComponent implements OnInit {

  mensaje: string;

  constructor( private _activatedRoute: ActivatedRoute ) {
    _activatedRoute.params.subscribe(params => {
      this.mensaje = params['msj'];
    });
  }

  ngOnInit() {
  }

}
