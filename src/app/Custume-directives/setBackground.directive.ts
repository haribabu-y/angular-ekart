import { Directive, ElementRef, Input, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector: '[setBackgroung]'
})
export class setBackground implements OnInit {

    @Input('setBackgroung') backgroundColor: string = '#36454f';
    @Input() textcolor: string = 'white';

    // private element: ElementRef;
    // private renderer: Renderer2;
    constructor(private element: ElementRef, private renderer: Renderer2) {
        // this.element = element;
        // this.renderer = renderer;
    }

    ngOnInit() {
        // this.element.nativeElement.style.backgroundColor = "#36454f";
        // this.element.nativeElement.style.color = "white";
        this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', this.backgroundColor);
        this.renderer.setStyle(this.element.nativeElement, 'color', this.textcolor);
        this.renderer.setAttribute(this.element.nativeElement, 'title', 'This is a custom directive');
    }
}