import { NgModule } from "@angular/core";

import { IconModule } from '@ant-design/icons-angular';

import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
    exports: [
        NzMenuModule,
        NzLayoutModule,
        NzPageHeaderModule,
        NzInputModule,
        NzButtonModule,
        IconModule
    ]
})
export class NgAntModule {}