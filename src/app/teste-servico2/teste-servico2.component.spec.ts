import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteServico2Component } from './teste-servico2.component';

describe('TesteServico2Component', () => {
  let component: TesteServico2Component;
  let fixture: ComponentFixture<TesteServico2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TesteServico2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TesteServico2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
