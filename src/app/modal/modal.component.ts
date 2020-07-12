import { Component, OnInit } from '@angular/core';
import {ModalServiceService} from '../services/modal-service.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(
    public modalService : ModalServiceService
      ) { }

  ngOnInit(): void {
  }

}
