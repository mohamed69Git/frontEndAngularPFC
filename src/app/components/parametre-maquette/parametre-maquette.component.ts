import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ElementsConstitutifsService } from 'src/app/services/elements-constitutifs.service';
import { Elemcons } from '../Elemcons';
import { ElemConsService } from './elem-cons.service';
import { ElemconsServ } from './ElemconServ';
import { ModalService } from './modal.service';
import { ModalInterface } from './ModalInterface';
import { SemestreService } from './semestre.service';
import { SemestreInterface } from './SemestreInterface';
import { Ue } from './Ue';
import { UeueService } from './ueue.service';

@Component({
  selector: 'app-parametre-maquette',
  templateUrl: './parametre-maquette.component.html',
  styleUrls: ['./parametre-maquette.component.css']
})
export class ParametreMaquetteComponent implements OnInit {
  i: number;
  elemCons: Elemcons
  ue: Ue[] = []
  sem: SemestreInterface[] = []
  modalite: ModalInterface[] = []
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
  modaliteControl: FormGroup;
  semestreControl: FormGroup;
  ElemconsControl: FormGroup;
  UniteEnseigneControl: FormGroup;





  constructor(
    private http: HttpClient,
    private elem: ElemConsService,
    private servue: UeueService,
    private semestre: SemestreService,
    private modalServ: ModalService) { }


  ngOnInit(): void {
    this.elemCons = new Elemcons()

    this.modaliteControl = new FormGroup({
      tdtp: new FormControl('', [Validators.required]),
      cm: new FormControl('', [Validators.required]),
      elem_const_id: new FormControl('', [Validators.required]),
    });
    this.semestreControl = new FormGroup({
      numero: new FormControl('', [Validators.required]),
    });
    this.ElemconsControl = new FormGroup({
      codeEc: new FormControl('', [Validators.required]),
      intituleEc: new FormControl('', [Validators.required]),
      unite_enseignements_id: new FormControl('', [Validators.required]),
    });
    this.UniteEnseigneControl = new FormGroup({
      codeUe: new FormControl('', [Validators.required]),
      intituleUe: new FormControl('', [Validators.required]),
      semestreId: new FormControl('', [Validators.required]),
    });
    this.allUe()
    this.allSem()
    this.findElementConstitutif()
    this.allModalites()

  }

  get tdtp() {
    return this.modaliteControl.get('tdtp');
  }

  get elem_const_id() {
    return this.modaliteControl.get('elem_const_id');
  }



  get cm() {
    return this.modaliteControl.get('cm');
  }
  get numero() {
    return this.semestreControl.get('numero');
  }

  get codeUe() {
    return this.UniteEnseigneControl.get('codeUe');
  }

  get intituleUe() {
    return this.UniteEnseigneControl.get('intituleUe');
  }

  get semestreId() {
    return this.UniteEnseigneControl.get('semestreId');
  }

  get codeEc() {
    return this.ElemconsControl.get('codeEc');
  }

  get intituleEc() {
    return this.ElemconsControl.get('intituleEc');
  }

  get unite_enseignements_id() {
    return this.ElemconsControl.get('unite_enseignements_id');
  }

  a: number;
  gridStyle = {
    width: '100%',
    textAlign: 'center',
  };

  addItem(input: HTMLInputElement): void {
    // const value = input.value;
    const valueNum = input.valueAsNumber
    // if (this.id_elem.indexOf(valueNum) === -1) {
    //   this.id_elem = [...this.id_elem, input.valueAsNumber || this.index2++]
    // }
    // if (this.listOfItem.indexOf(value) === -1) {
    //   this.listOfItem = [...this.listOfItem, input.value || `New item ${this.index++}`];
    // }
  }

  // showModal(): void {
  //   this.isVisible = true;
  // }




  findElementConstitutif() {
    this.elem.findElementConstitutif().subscribe((resp: any) => {
      for (let i = 0; i < resp.length; i++) {

        this.elem_cons.push({
          id: resp[i].elements.id,
          code: resp[i].elements.code,
          intitule: resp[i].elements.intitule,
          unite_enseignement_id: resp[i].elements.unite_enseignement.code+" "+resp[i].elements.unite_enseignement.intitule,
        })
      }
     
      console.log("liste des elements dkjke", this.elem_cons.length)
    }, (err) => { console.log(err) })
  }



  allUe() {
    this.servue.allUe().subscribe((res: any) => {
      for (let i = 0; i < res.length; i++) {
        this.ue.push({
          id: res[i].id,
          code: res[i].code,
          intitule: res[i].intitule,
          semestre: res[i].semestre_id 
        })
      }
      console.log("liste des unites d'enseignements", this.ue)
    }, (err: any) => { console.log(err) })
  }

  allSem() {
    this.semestre.allSem().subscribe((res: any) => {
      for (let i = 0; i < res.length; i++) {
        this.sem.push({
          id: res[i].id,
          numero: res[i].numero
        })
      }
      console.log("liste des semestres", this.sem)
    }, (err) => { console.log(err) });
  }

  allModalites(){
    this.modalServ.allModalite().subscribe((res: any)=>{ 
    
      for (let i = 0; i < res.length; i++) {
        this.modalite.push({
          tdtp: res[i].modalite.td_tp,
          cm: res[i].modalite.cm,
          ec: res[i].modalite.element_constitutif.id,
          intituleEc: res[i].modalite.element_constitutif.intitule,
          code: res[i].modalite.element_constitutif.code
        })
      }
      console.log("liste des modalite",this.modalite)}, 
      
    (err: any) => { console.log(err) })
  }

  isshowVisible = false;
  showshowModal(): void {
    this.isVisible = true;
  }
  handleshowOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }
  handleshowCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }


  //Definition des fonctions de contrôle

  showModalMe(): void {
    this.isVisibleMe = true;
    this.isVisible = false;

  }
  showModalEc(): void {
    this.isVisibleMe = false;
    this.isVisible = true;
  }
  showModalUe(): void {
    this.isVisible = false;
    this.isVisibleUe = true;
  }
  showModalSem(): void {
    this.isVisibleSem = true;
    this.isVisibleUe = false;
  }



  
  
  handleCancel(): void {
    this.isVisible = false;
  }
  handleCancelMe(): void {
    this.isVisibleMe = false;
  }


  handleOkUe(): void {
    console.log(this.UniteEnseigneControl.value)
    this.servue.addUe({
      code: this.codeUe?.value,
      intitule: this.intituleUe?.value,
      semestre_id: this.semestreId?.value,
    }).subscribe(
      (res: any) => { console.log(res) },
      (err) => { console.log(err) })
    this.isVisibleUe = false;
  }
  handleCancelUe(): void {
    this.isVisibleSem = false;
    this.isVisibleUe = false;
  }

  handleOkEc(): void {
    this.elem.addEc({
      code: this.codeEc?.value,
      intitule: this.intituleEc?.value,
      unite_enseignements_id: this.unite_enseignements_id?.value
    }).subscribe(
      (res) => { console.log(res) },
      (error: any) => { console.log(error) });
    console.log(this.ElemconsControl.value)
    this.isVisible = false;
  }
  handleCancelEc(): void {
    this.isVisible = false;
  }


  handleCancelSem(): void {
    this.isVisibleSem = false;
  }
  handleOkSem(): void {
    console.log("le numeoro est: " + this.codeUe?.value)
    this.semestre.addSem({ numero: this.numero?.value }).subscribe(
      (res: any) => { console.log(res) },
      (err: any) => { console.log(err) });
    console.log(this.semestreControl.value)
    this.isVisibleSem = false;
  }
  addUe(): void {
    this.servue.addUe({
      code: this.codeUe?.value,
      intitule: this.intituleUe?.value,
      semestre_id: this.semestreId?.value
    }).subscribe(
      (res: any) => { console.log(res) },
      (err) => { console.log(err) })
    }
    handleOkMe(): void {
      this.modalServ.addModalite({
        td_tp: this.tdtp?.value,
        cm: this.cm?.value,
        element_constitutifs_id : this.elem_const_id?.value
      }).subscribe((resp) => { console.log(resp) },
        (err: any) => { console.log(err) });
      console.log(this.modaliteControl.value)
      this.isVisibleMe = false;
  
      // console.log(this.elemCons)
      // this.isConfirmLoading = true;
      // setTimeout(() => {
      //   this.isVisible = false;
      //   this.isConfirmLoading = false;
      // }, 1000);
    }

}

