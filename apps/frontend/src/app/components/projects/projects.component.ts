import { ViewportScroller } from '@angular/common';
import { ChangeDetectionStrategy, Component, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-projects',
    standalone: true,
    imports: [],
    templateUrl: './projects.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsComponent implements AfterViewInit {
    constructor(private viewportScroller: ViewportScroller, private route: ActivatedRoute) {}

    ngAfterViewInit(): void {
        // Listen to fragment changes
        this.route.fragment.subscribe((fragment: string | null) => {
            if (fragment) {
                setTimeout(() => {
                    this.scrollToAnchor(fragment);
                }, 0); // Using a timeout to ensure the view is fully loaded before scrolling
            }
        });
    }

    scrollToAnchor(anchor: string): void {
        const yOffset = -60;
        const element = document.getElementById(anchor);

        if (element) {
            const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    }
}
