import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Cuadragunlar } from '../cudrangular';

@Component({
  selector: 'app-cudrangular',
  templateUrl: './cudrangular.component.html',
  styleUrls: ['./cudrangular.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class CudrangularComponent implements OnInit {
  
  cuad: Cuadragunlar = {
    id: 1,
    name: 'UD Tournament',
    equipos: [['a','b','c','d'],['0','0','0','0'],['0','0','0','0'],['0','0','0','0'],['0','0','0','0']],
    marcador: [[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],
    puntos: [0,0,0,0]
  }
  //nameCuad = 'UD Tournament'
  constructor() { }

  ngOnInit(): void {
  }

  getMarcadores(): void {
    
  }

}
