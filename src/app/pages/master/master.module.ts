import { NgModule } from '@angular/core';
import {
    NbActionsModule,
    NbButtonModule,
    NbCardModule,
    NbCheckboxModule,
    NbDatepickerModule, NbIconModule,
    NbInputModule,
    NbRadioModule,
    NbSelectModule,
    NbUserModule,
} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { MasterRoutingModule } from './master-routing.module';
import { RoleComponent } from './role/role.component';
import { FormsModule as ngFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        ThemeModule,
        NbInputModule,
        NbCardModule,
        NbButtonModule,
        NbActionsModule,
        NbUserModule,
        NbCheckboxModule,
        NbRadioModule,
        NbDatepickerModule,
        MasterRoutingModule,
        NbSelectModule,
        NbIconModule,
        ngFormsModule,
    ],
    declarations: [
        RoleComponent
    ],
})
export class MasterModule { }
