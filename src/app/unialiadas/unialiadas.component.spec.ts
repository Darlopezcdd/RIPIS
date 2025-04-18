import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnialiadasComponent } from './unialiadas.component';

describe('UnialiadasComponent', () => {
  let component: UnialiadasComponent;
  let fixture: ComponentFixture<UnialiadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnialiadasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnialiadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
