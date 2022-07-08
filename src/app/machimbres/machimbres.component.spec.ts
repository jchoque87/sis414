import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachimbresComponent } from './machimbres.component';

describe('MachimbresComponent', () => {
  let component: MachimbresComponent;
  let fixture: ComponentFixture<MachimbresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MachimbresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MachimbresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
