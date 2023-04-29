import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilityManagementEditorComponent } from './utility-management-editor.component';

describe('UtilityManagementEditorComponent', () => {
  let component: UtilityManagementEditorComponent;
  let fixture: ComponentFixture<UtilityManagementEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtilityManagementEditorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UtilityManagementEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
