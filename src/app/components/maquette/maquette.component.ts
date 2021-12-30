import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Elemcons } from '../Elemcons';
import { ElemConsService } from '../parametre-maquette/elem-cons.service';
import { ElemconsServ } from '../parametre-maquette/ElemconServ';
import { ModalService } from '../parametre-maquette/modal.service';
import { SemestreService } from '../parametre-maquette/semestre.service';
import { SemestreInterface } from '../parametre-maquette/SemestreInterface';
import { Ue } from '../parametre-maquette/Ue';
import { UeueService } from '../parametre-maquette/ueue.service';
import { MaquetteService } from './maquette.service';


@Component({
  selector: 'app-maquette',
  templateUrl: './maquette.component.html',
  styleUrls: ['./maquette.component.css']
})
export class MaquetteComponent implements OnInit {
  i: number;
  elemCons: Elemcons

  listOfItem = ['jack', 'lucy'];
  index = 0;
  index2 = 0;
  src = `/assets/sft4nfZ4.jpg`;
  isVisibleUe = false;
  isVisibleMe = false;
  elem_cons: ElemconsServ[] = [];
  selectedValue = null;
  isVisible = false;
  isConfirmLoading = false;
  isVisibleSem: boolean;
  maquette: any;

  constructor(private http: HttpClient, private maquetteService: MaquetteService) { }



  ngOnInit(): void {
    this.getMaquette()
  }

  a: number;
  gridStyle = {
    width: '100%',
    textAlign: 'center',
  };
  getMaquette(): void {
    this.maquetteService.showmaquette().subscribe(
      (res: any) => {
        this.maquette = res;
        console.log(this.maquette[0].unite_enseignement.length)
      },
      (err: any) => { console.log(err) })
  }








}
