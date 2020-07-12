import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ClienteServiceService} from '../../services/cliente-service.service';
import {CarritoServiceService} from '../../services/carrito-service.service';
import {ModalServiceService} from '../../services/modal-service.service';

@Component({
  selector: 'app-stepper-overview',
  templateUrl: './stepper-overview.component.html',
  styleUrls: ['./stepper-overview.component.css']
})
export class StepperOverviewComponent implements OnInit {


  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  public cliente = {
    first_name: null,
    last_name: null,
    rut: null,
    email: null,
    address: null
  };

  public error = {email: '', rut: '', first_name: '', last_name: '', address: ''};


  constructor(
    private _formBuilder: FormBuilder,
    private clienteService: ClienteServiceService,
    private carritoService: CarritoServiceService,
    public modalService: ModalServiceService
  ) {
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  onSubmit() {
    this.clienteService.newUser(this.cliente).subscribe(
      data => this.handleResponse(data),
      error => this.errorHandler(error)
    )
  }

  public handleResponse(data) {
    console.log(data);
  }

  public errorHandler(error) {
    this.error = error.error.errors;
  }


  /*pagarLibros(){
    this.carritoService.
  }*/





}
