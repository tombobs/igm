import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HashtagViewComponent } from './hashtag-view.component';

describe('HashtagViewComponent', () => {
  let component: HashtagViewComponent;
  let fixture: ComponentFixture<HashtagViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HashtagViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HashtagViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
