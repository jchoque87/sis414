import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LucesSemidirectasComponent } from './luces-semidirectas.component';

describe('LucesSemidirectasComponent', () => {
  let component: LucesSemidirectasComponent;
  let fixture: ComponentFixture<LucesSemidirectasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LucesSemidirectasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LucesSemidirectasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
