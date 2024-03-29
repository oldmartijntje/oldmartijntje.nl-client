import { Component, HostListener, Input, OnInit } from '@angular/core';


@Component({
    selector: 'app-ui-element',
    templateUrl: './ui-element.component.html',
    styleUrl: './ui-element.component.scss'
})
export class UiElementComponent implements OnInit {
    @Input() widthOfContent: string = '800px';
    @Input() maxWidthOfContent: string = 'none';
    @Input() capAtVH: boolean = true;
    @Input() overflowY: string = 'hidden';
    @Input() disableLinks: boolean = false;



    heightOfContent: string = '100%';
    customWidthOfContent = this.widthOfContent;

    isWideScreen: boolean = window.innerWidth >= 1024;

    constructor(
    ) { }

    ngOnInit() {
        this.customWidthOfContent = this.isBiggerThanMaxWidth();
        this.onResize(null);
    }

    @HostListener('window:resize', ['$event'])
    onResize(event: Event | null) {
        this.isWideScreen = window.innerWidth >= 1024;
        if (this.isWideScreen) {
            this.heightOfContent = '100%';
        } else {
            this.heightOfContent = '90svh';
        }
        this.customWidthOfContent = this.isBiggerThanMaxWidth();
    }

    returnHeightClass(mode: number = 0): string {
        if (this.capAtVH && mode === 0) {
            return 'height-cap-vh';
        } else if (this.capAtVH && mode === 0) {
            return 'height-cap-percent';
        } else {
            return 'height-cap-none';
        }
    }

    isBiggerThanMaxWidth(): string {
        if (parseInt(this.maxWidthOfContent.split('px')[0]) > window.innerWidth) {
            return window.innerWidth + 'px';
        } else {
            return this.widthOfContent;
        }
    }

    goToWebPage(url: string, openInNewTab: boolean = false): void {
        if (openInNewTab) {
            window.open(url, '_blank');
        } else {
            window.location.href = url;
        }
    }


}
