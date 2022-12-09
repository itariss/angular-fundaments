import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteServicoComponent } from './teste-servico.component';

describe('TesteServicoComponent', () => {
  let component: TesteServicoComponent;
  let fixture: ComponentFixture<TesteServicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TesteServicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TesteServicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
