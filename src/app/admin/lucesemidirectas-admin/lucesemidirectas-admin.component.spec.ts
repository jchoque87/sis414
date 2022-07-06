import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LucesemidirectasAdminComponent } from './lucesemidirectas-admin.component';

describe('LucesemidirectasAdminComponent', () => {
  let component: LucesemidirectasAdminComponent;
  let fixture: ComponentFixture<LucesemidirectasAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LucesemidirectasAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LucesemidirectasAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
