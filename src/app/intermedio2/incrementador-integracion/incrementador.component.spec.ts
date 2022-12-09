import { TestBed, ComponentFixture } from '@angular/core/testing';
import { IncrementadorComponent } from './incrementador.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';


describe('Incremendator Component', () => {

    let component: IncrementadorComponent;
    let fixture: ComponentFixture<IncrementadorComponent>;

    beforeEach( async () => {
        TestBed.configureTestingModule({
            declarations: [  ],
            imports: [ FormsModule ]
        });

        fixture = TestBed.createComponent(IncrementadorComponent);
        component = fixture.componentInstance;

    });

    it('Debe de mostrar la leyenda', () => {
        component.leyenda = 'Proceso de carga';
        fixture.detectChanges();

        const elem: HTMLElement = fixture.debugElement.query(By.css('h3')).nativeElement;
        expect(elem.innerHTML).toContain('Proceso de carga')
    });

    it('Debe de mostrar en el input el progreso', (done) => {
        component.cambiarValor(5);
        fixture.detectChanges();
        fixture.whenStable().then(()=>{
            const input = fixture.debugElement.query(By.css("input")).nativeElement;
            expect(input.value).toBe('55')
        })
        done();
    });

    it('Debe incrementar/decrementar en 5 con un click en el boton', (done) => {
        const botones = fixture.debugElement.queryAll(By.css("button"));
        const botonDecrementar = botones[0].nativeElement;
        const botonAumentar = botones[1].nativeElement;
        botonAumentar.click();
        fixture.detectChanges();
        fixture.whenStable().then(()=>{
            const input = fixture.debugElement.query(By.css("input")).nativeElement;
            expect(input.value).toBe('55')
            
            botonDecrementar.click();
            fixture.detectChanges();
            fixture.whenStable().then(()=>{
                const input = fixture.debugElement.query(By.css("input")).nativeElement;
                expect(input.value).toBe('50')
            })
        })
        
        done();
    });

    it('En el titulo del componente debe de mostrar progreso', (done) => {
        const botones = fixture.debugElement.queryAll(By.css("button"));
        const botonAumentar = botones[1].nativeElement;
        botonAumentar.click();
        fixture.detectChanges();
        fixture.whenStable().then(()=>{
            const elem=fixture.debugElement.query(By.css("h3")).nativeElement;
            expect(elem.innerHTML).toContain(55)
        })
        
        done();
    });

});
