import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserManagementEditorComponent } from './user-management-editor.component';

describe('UserManagementEditorComponent', () => {
  let component: UserManagementEditorComponent;
  let fixture: ComponentFixture<UserManagementEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserManagementEditorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserManagementEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
