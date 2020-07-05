import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HashtagGenerateComponent } from './hashtag-generate.component';

describe('HashtagGenerateComponent', () => {
  let component: HashtagGenerateComponent;
  let fixture: ComponentFixture<HashtagGenerateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HashtagGenerateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HashtagGenerateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
