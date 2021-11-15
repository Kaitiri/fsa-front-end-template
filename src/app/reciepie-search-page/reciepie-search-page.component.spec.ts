import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReciepieSearchPageComponent } from './reciepie-search-page.component';

describe('ReciepieSearchPageComponent', () => {
  let component: ReciepieSearchPageComponent;
  let fixture: ComponentFixture<ReciepieSearchPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReciepieSearchPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReciepieSearchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
