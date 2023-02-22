import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.scss']
})
export class Component1Component implements OnInit {
  name: string = '';
  
  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.commonData$.subscribe((data:any) => {
      this.name = data;
    })

    this.sharedService.commonDataBS$.subscribe((data: any) => {
      this.name = data;
    })
  }

}
