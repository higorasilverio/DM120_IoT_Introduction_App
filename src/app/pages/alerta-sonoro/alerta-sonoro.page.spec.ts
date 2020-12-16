import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlertaSonoroPage } from './alerta-sonoro.page';

describe('AlertaSonoroPage', () => {
  let component: AlertaSonoroPage;
  let fixture: ComponentFixture<AlertaSonoroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertaSonoroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlertaSonoroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
