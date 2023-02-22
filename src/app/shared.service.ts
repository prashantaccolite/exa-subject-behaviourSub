import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  private commonDataBS = new BehaviorSubject<any>('This is Default Value');
  commonDataBS$ = this.commonDataBS.asObservable();

  private commonData = new Subject<any>();
  commonData$ = this.commonData.asObservable();

  public setData(data: any) {
      this.commonData.next(data);
  }

}
