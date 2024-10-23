import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
    selector: 'app-experience',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './experience.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExperienceComponent {}
