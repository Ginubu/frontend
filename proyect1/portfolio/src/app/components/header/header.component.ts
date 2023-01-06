import { Component, OnInit } from '@angular/core';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { PortfolioService } from 'src/app/services/portfolio.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  pen = faPen;
  constructor( private obtenerDatos:PortfolioService) { }

  ngOnInit(): void {
    this.obtenerDatos.obtenerDatos().subscribe(data => {
      console.log(data);
    });
  }

}
