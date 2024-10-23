import {
    ChangeDetectionStrategy,
    Component,
    CUSTOM_ELEMENTS_SCHEMA
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';

@Component({
    standalone: true,
    imports: [RouterModule, MenuComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    selector: 'app-root',
    templateUrl: './app.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
    title = 'Jason Hick: Front-end developer - UI and Angular';
}
