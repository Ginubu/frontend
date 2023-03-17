import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-cur-altium',
  templateUrl: './cur-altium.component.html',
  styleUrls: ['./cur-altium.component.css']
})
export class CurAltiumComponent implements OnInit {

  constructor(private obtenerDatos:PortfolioService) { }

  datos:any;


  ngOnInit(): void {
    this.obtenerDatos.obtenerDatos().subscribe(data => {
      this.datos = data;
    });
  }

}
