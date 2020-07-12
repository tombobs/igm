import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IgmInputComponent } from './igm-input.component';

describe('IgmInputComponent', () => {
  let component: IgmInputComponent;
  let fixture: ComponentFixture<IgmInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IgmInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IgmInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
