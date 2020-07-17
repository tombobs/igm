import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtsyComponent } from './etsy.component';

describe('EtsyComponent', () => {
  let component: EtsyComponent;
  let fixture: ComponentFixture<EtsyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtsyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtsyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
