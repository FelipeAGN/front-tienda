import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auto-complete-search',
  templateUrl: './auto-complete-search.component.html',
  styleUrls: ['./auto-complete-search.component.css']
})
export class AutoCompleteSearchComponent implements OnInit {

  public options: string[] = ['Angular','asda','asdas'];
  constructor() { }

  ngOnInit(): void {
  }

}
