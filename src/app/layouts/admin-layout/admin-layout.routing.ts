import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { RayonsComponent } from 'app/components/rayons/rayons.component';
import { AddRayonComponent } from 'app/components/add-rayon/add-rayon.component';
import { StockComponent } from 'app/components/stock/stock.component';
import { UpdateRayonComponent } from 'app/components/update-rayon/update-rayon.component';
import { PromotionComponent } from 'app/components/promotion/promotion.component';
import { AddPromotionComponent } from 'app/components/add-promotion/add-promotion.component';
import { HighchartsComponent } from 'app/components/highcharts/highcharts.component';
import { UserProfileComponent } from 'app/user-profile/user-profile.component';
import { TableListComponent } from 'app/table-list/table-list.component';
import { TypographyComponent } from 'app/typography/typography.component';
import { IconsComponent } from 'app/icons/icons.component';
import { MapsComponent } from 'app/maps/maps.component';
import { NotificationsComponent } from 'app/notifications/notifications.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'rayons',         component: RayonsComponent },
    { path: 'addRayon',       component: AddRayonComponent },
    { path: 'stock',          component: StockComponent },
    { path: 'updateRayon',    component: UpdateRayonComponent },
    { path: 'promotions',     component: PromotionComponent },
    { path: 'addPromotion',   component: AddPromotionComponent },
    { path: 'highcharts',     component: HighchartsComponent },
];
