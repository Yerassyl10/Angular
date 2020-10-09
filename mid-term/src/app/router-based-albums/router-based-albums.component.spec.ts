import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterBasedAlbumsComponent } from './router-based-albums.component';

describe('RouterBasedAlbumsComponent', () => {
  let component: RouterBasedAlbumsComponent;
  let fixture: ComponentFixture<RouterBasedAlbumsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterBasedAlbumsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterBasedAlbumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
