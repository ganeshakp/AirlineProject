<<<<<<< HEAD

import { Directive, HostListener, HostBinding, ElementRef } from '@angular/core';

@Directive({
    selector: '[appdropdown]'
})
export class DropdownDirective {
    @HostBinding('class.open') isOpen = false;

    @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
        this.isOpen = this.elRef.nativeElement.contains(event.target)
            ? !this.isOpen
            : false;
    }

    constructor(private elRef: ElementRef) {}
}
=======
import { Directive, HostListener, HostBinding, ElementRef } from '@angular/core';

@Directive({
    selector: '[appdropdown]'
})
export class DropdownDirective {
    @HostBinding('class.open') isOpen = false;

    @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
        this.isOpen = this.elRef.nativeElement.contains(event.target)
            ? !this.isOpen
            : false;
    }

    constructor(private elRef: ElementRef) {}
}
>>>>>>> 997f8ec91f9e1cbd54fdc4920c39ca44f314f432
