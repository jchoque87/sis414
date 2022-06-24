import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PisosAdminComponent } from './pisos-admin.component';

describe('PisosAdminComponent', () => {
  let component: PisosAdminComponent;
  let fixture: ComponentFixture<PisosAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PisosAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PisosAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
