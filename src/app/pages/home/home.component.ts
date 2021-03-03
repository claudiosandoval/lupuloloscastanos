import { Component, OnInit } from '@angular/core';

import { LupuloService } from 'src/app/services/lupulo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public lupuloService: LupuloService) { }

  ngOnInit(): void {
  }

}
