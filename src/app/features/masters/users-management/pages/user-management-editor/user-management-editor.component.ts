import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-management-editor',
  templateUrl: './user-management-editor.component.html',
  styleUrls: ['./user-management-editor.component.css']
})
export class UserManagementEditorComponent {

  constructor(
    public router: Router
  ){}
  visit(){
    this.router.navigate(['/masters/utility']);
  }

}
