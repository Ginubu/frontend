import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service'


@Component({
  selector: 'app-cur-met',
  templateUrl: './cur-met.component.html',
  styleUrls: ['./cur-met.component.css']
})
export class CurMetComponent implements OnInit {

  constructor(private obtenerDatos:PortfolioService) { }

  datos:any;


  ngOnInit(): void {
    this.obtenerDatos.obtenerDatos().subscribe(data => {
      this.datos = data;
    });
  }

}
