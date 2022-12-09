import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterLink, RouterLinkWithHref, RouterOutlet } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { MedicosComponent } from './intermedio/espias/medicos.component';


describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MedicosComponent
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
  });

  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'frontend'`, () => {
    const app = fixture.componentInstance;
    expect(app.title).toEqual('frontend');
  });

  it('Debe de tener un router oulet', () => {
    const elem = fixture.debugElement.query(By.directive(RouterOutlet))
    expect(elem).not.toBeNull();
  });
 
  it('Debe ir a la página de médicos', () => {
    const elems = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref))
    let exists = false;
    for (const elem of elems)
      if(elem.attributes['routerLink']=='/medicos'){exists=true;break;}
       
      
    expect(exists).toBeTruthy();
  });
 
});
