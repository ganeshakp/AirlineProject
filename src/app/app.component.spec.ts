
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('AppComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
    declarations: [AppComponent],
    imports: [RouterModule.forRoot([]), RouterTestingModule],
    providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
}).compileComponents();
    });

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });

    it(`should have as title 'AirlineProject'`, () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app.title).toEqual('AirlineProject');
    });

    it('should render a div with container class', () => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        //const compiled = fixture.nativeElement;
        const div : HTMLElement = fixture.nativeElement.querySelector('div');
        expect(div.className).toContain(
            'container'
        );
    });
    it('should render a div with row class', () => {
      const fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
      //const compiled = fixture.nativeElement;
      const div : HTMLElement = fixture.nativeElement.querySelector('div');
      const innerdiv = div.querySelector('div');
      expect(innerdiv?.className).toContain(
          'row'
      );
  });
  it('should render a div with row class', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    //const compiled = fixture.nativeElement;
    const div : HTMLElement[] = fixture.nativeElement.querySelectorAll('div');
    const innermostdiv = div[div.length -1];
    expect(innermostdiv?.className).toContain(
        'col-md-12'
    );
});
});