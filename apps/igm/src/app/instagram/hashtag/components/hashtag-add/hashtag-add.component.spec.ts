import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HashtagAddComponent } from './hashtag-add.component';

describe('HashtagsAddComponent', () => {
  let component: HashtagAddComponent;
  let fixture: ComponentFixture<HashtagAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HashtagAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HashtagAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
