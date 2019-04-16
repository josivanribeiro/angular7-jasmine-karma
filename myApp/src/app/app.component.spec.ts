import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';


describe('App component', () => {
  beforeEach(async(() => {
    // The TestBed is the most important of the Angular testing utilities.
    // The TestBed creates a dynamically-constructed Angular test module that emulates an Angular @NgModule.
    // The TestBed.configureTestingModule() method takes a metadata object that can have most of the properties of an @NgModule.
    TestBed.configureTestingModule({
      declarations: [AppComponent]
    }).compileComponents();
  }));

  describe(':', () => {

    // Begin by putting re-usable, preparatory code in a setup function instead of beforeEach().
    // The setup() function returns an object literal with the variables, such as app, that a test might reference.
    // You don't define semi-global variables (e.g., let app,fixture ) in the body of the describe().
    // Then each test invokes setup() in its first line, before continuing with steps that
    // manipulate the test subject and assert expectations.

    function setup() {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      return { fixture, app };
    }

    it('should create the app', async(() => {
      const { app } = setup();
      expect(app).toBeTruthy();
    }));

    it('should have title as \'Angular7-unit-testing!\'', async(() => {
      const { app } = setup();
      expect(app.title).toBe('Angular7-unit-testing!');
    }));

    it('should have h1 tag as \'Welcome Angular7-unit-testing!\'', async(() => {
      const { app, fixture } = setup();
      fixture.detectChanges();
      const compile = fixture.debugElement.nativeElement;
      const h1tag = compile.querySelector('h1');
      expect(h1tag.textContent).toBe(' Welcome to Angular7-unit-testing!! ');
    }));

    it('should have textarea tag as \'At w3schools.com\'', async(() => {
      const { app, fixture } = setup();
      fixture.detectChanges();
      const compile = fixture.debugElement.nativeElement;
      const tag = compile.querySelector('textarea');
      expect(tag.textContent).toBe('At w3schools.com');
    }));

    it('should have input button salvar', async(() => {
      const { app, fixture } = setup();
      fixture.detectChanges();
      const compile = fixture.debugElement.nativeElement;
      const tag = compile. querySelector('button');
      expect(tag.textContent).toBe('Salvar');
    }));

    it('should have input button limpar', async(() => {
      const { app, fixture } = setup();
      fixture.detectChanges();
      const compile = fixture.debugElement.nativeElement;
      //const tag = (compile.querySelector('button').textContent).toContain('Limpar');
      expect(compile.querySelector('#btnLimpar').textContent).toContain('Limpar');      
    }));

    it('should have input button desabilitado', async(() => {
      const { app, fixture } = setup();
      fixture.detectChanges();
      const compile = fixture.debugElement.nativeElement;
      expect(compile.querySelector('#btnDesabilitado').textContent).toContain('Desabilitado');      
    }));

    it('should set 😜 on click', () => {
      const fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
    
      const h1 = fixture.debugElement.query(By.css('h2'));
      h1.triggerEventHandler('click', {});
      fixture.detectChanges();
    
      expect(
        fixture.debugElement.query(By.css('h2')).nativeElement.innerText
      ).toEqual('😜');
    });

  });
});