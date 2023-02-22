import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.scss']
})
export class Component2Component implements OnInit {

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    
  }

  passData(){
    this.sharedService.setData('Prashant Shrivastava');
  }

}
