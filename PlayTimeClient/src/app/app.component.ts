import { Component, Inject, OnInit } from '@angular/core';
import { ToastQueueService } from './services/toast-queue.service';
import { Router } from '@angular/router';
import { Settings } from './data/settings';
import { RuntimeServiceService } from './services/runtime-service.service';
import { DOCUMENT, PlatformLocation } from '@angular/common';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'PlayTime';
    editorSubscription: any;
    showWindows: boolean = false;
    mobileMode: { [key: string]: any } = {
        "MobileUser": false,
        "MobileMode": false
    };
    mobileModePopup: boolean = true;
    ignoreDisclaimer: boolean = false;

    constructor(
        private toastQueueService: ToastQueueService,
        private runtimeServiceService: RuntimeServiceService,
        private router: Router,
        @Inject(DOCUMENT) private document: Document,
    ) {

    }
    ngOnInit(): void {
        // this.toastQueueService.showToast('Hello World!', 'info', 0);
        // this.toastQueueService.showToast('Hello World!', 'warning', 0);
        // this.toastQueueService.showToast('Hello World!', 'error', 0);
        this.router.events.subscribe(event => {
            const currentUrl = this.router.url; // Get the full URL
            const currentPathWithoutQueryParams = currentUrl.split('?')[0].substring(1); // Extract the path
            currentPathWithoutQueryParams;
            if (Settings["inWindowsRouter"].includes(currentPathWithoutQueryParams)) {
                this.showWindows = true;
            } else {
                this.showWindows = false;
            }
            if (Settings["ignoreDisclaimer"].includes(currentPathWithoutQueryParams)) {
                this.ignoreDisclaimer = true;
            } else {
                this.ignoreDisclaimer = false;
            }
        });
        this.runtimeServiceService.mobileModeSubjectValue$.subscribe((value) => {
            this.mobileMode = value;
        });
        if (this.isMobileDevice()) {
            this.runtimeServiceService.setMobileMode(true);
            this.runtimeServiceService.setMobileUserType(true);
        } else {
            if (localStorage.getItem("MobileMode") != null) {
                this.runtimeServiceService.setMobileMode(JSON.parse(localStorage.getItem("MobileMode") || ""));
            }
        }


    }

    isMobileDevice(): boolean {
        const userAgent = this.document.defaultView?.navigator?.userAgent || '';
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
    }


}
