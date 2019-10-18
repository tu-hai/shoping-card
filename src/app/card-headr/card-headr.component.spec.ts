import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardHeadrComponent } from './card-headr.component';

describe('CardHeadrComponent', () => {
  let component: CardHeadrComponent;
  let fixture: ComponentFixture<CardHeadrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardHeadrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardHeadrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
