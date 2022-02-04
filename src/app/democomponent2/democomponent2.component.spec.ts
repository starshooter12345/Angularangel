import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Democomponent2Component } from './democomponent2.component';

describe('Democomponent2Component', () => {
  let component: Democomponent2Component;
  let fixture: ComponentFixture<Democomponent2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Democomponent2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Democomponent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
