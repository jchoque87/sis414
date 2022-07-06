import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachimbresAdminComponent } from './machimbres-admin.component';

describe('MachimbresAdminComponent', () => {
  let component: MachimbresAdminComponent;
  let fixture: ComponentFixture<MachimbresAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MachimbresAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MachimbresAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
