import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HashtagSearchResultsComponent } from './hashtag-search-results.component';

describe('HashtagSearchResultsComponent', () => {
  let component: HashtagSearchResultsComponent;
  let fixture: ComponentFixture<HashtagSearchResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HashtagSearchResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HashtagSearchResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
