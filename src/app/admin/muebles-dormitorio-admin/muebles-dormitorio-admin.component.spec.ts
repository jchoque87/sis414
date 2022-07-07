import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MueblesDormitorioAdminComponent } from './muebles-dormitorio-admin.component';

describe('MueblesDormitorioAdminComponent', () => {
  let component: MueblesDormitorioAdminComponent;
  let fixture: ComponentFixture<MueblesDormitorioAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MueblesDormitorioAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MueblesDormitorioAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
