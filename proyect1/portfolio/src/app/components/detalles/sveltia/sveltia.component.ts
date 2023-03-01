import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service'

@Component({
  selector: 'app-sveltia',
  templateUrl: './sveltia.component.html',
  styleUrls: ['./sveltia.component.css']
})
export class SveltiaComponent implements OnInit {

  constructor(private obtenerDatos:PortfolioService) { }

  datos:any;


  ngOnInit(): void {
    this.obtenerDatos.obtenerDatos().subscribe(data => {
      this.datos = data;
    });
  }

}
