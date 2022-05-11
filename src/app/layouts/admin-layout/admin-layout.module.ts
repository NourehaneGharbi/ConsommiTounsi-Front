import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import { RayonsComponent } from 'app/components/rayons/rayons.component';
import { AddRayonComponent } from 'app/components/add-rayon/add-rayon.component';
import { StockComponent } from 'app/components/stock/stock.component';
import { UpdateRayonComponent } from 'app/components/update-rayon/update-rayon.component';
import { PromotionComponent } from 'app/components/promotion/promotion.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AddPromotionComponent } from 'app/components/add-promotion/add-promotion.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { HighchartsComponent } from 'app/components/highcharts/highcharts.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { UserProfileComponent } from 'app/user-profile/user-profile.component';
import { TableListComponent } from 'app/table-list/table-list.component';
import { TypographyComponent } from 'app/typography/typography.component';
import { IconsComponent } from 'app/icons/icons.component';
import { MapsComponent } from 'app/maps/maps.component';
import { NotificationsComponent } from 'app/notifications/notifications.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HighchartsChartModule,
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    RayonsComponent,
    AddRayonComponent,
    StockComponent,
    UpdateRayonComponent,
    PromotionComponent,
    AddPromotionComponent,
    HighchartsComponent,
  ]
})

export class AdminLayoutModule {}
