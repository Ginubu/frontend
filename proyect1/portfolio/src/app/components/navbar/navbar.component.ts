import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service'


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  datos:any;
  ddb:any;
  constructor(private obtenerDatos:PortfolioService) { }
  
  ngOnInit(): void {
    this.obtenerDatos.obtenerDatos().subscribe(data => {
      this.datos = data;
    });


    this.obtenerDatos.obtenerDatosDB().subscribe(data => {
      this.ddb = data;
      
      for(let d of this.ddb){
        console.log(d);
      }
      

      
    });


  }

}
