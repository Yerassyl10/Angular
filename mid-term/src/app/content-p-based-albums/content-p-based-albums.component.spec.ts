import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentPBasedAlbumsComponent } from './content-p-based-albums.component';

describe('ContentPBasedAlbumsComponent', () => {
  let component: ContentPBasedAlbumsComponent;
  let fixture: ComponentFixture<ContentPBasedAlbumsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentPBasedAlbumsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentPBasedAlbumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
