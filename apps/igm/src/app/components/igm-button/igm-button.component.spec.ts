import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IgmButtonComponent } from './igm-button.component';

describe('IgmButtonComponent', () => {
  let component: IgmButtonComponent;
  let fixture: ComponentFixture<IgmButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IgmButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IgmButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
