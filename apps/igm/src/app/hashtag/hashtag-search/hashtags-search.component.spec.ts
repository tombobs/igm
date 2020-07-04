import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HashtagsSearchComponent } from './hashtags-search.component';

describe('HashtagsSearchComponent', () => {
  let component: HashtagsSearchComponent;
  let fixture: ComponentFixture<HashtagsSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HashtagsSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HashtagsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
