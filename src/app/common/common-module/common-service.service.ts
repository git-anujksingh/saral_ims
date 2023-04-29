import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CommonServiceService {
  private slideBarStreamValue = new BehaviorSubject<any>(true);
  returnType = true;
  isSlideBarVisible = this.slideBarStreamValue.asObservable();
  

  slideBarStream(){

    if(this.returnType == true){
      this.returnType = false
      this.slideBarStreamValue.next(this.returnType);
    }
    else {
      this.returnType = true
      this.slideBarStreamValue.next(this.returnType);
    }
    }


}
