//start nebular
import { NbThemeModule } from '@nebular/theme';
import { NbSidebarModule, NbLayoutModule, NbButtonModule } from '@nebular/theme';
//end nebular


//start ng -zorrho
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzTableModule} from 'ng-zorro-antd/table'
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { NzSpaceModule } from 'ng-zorro-antd/space';
//end ng -zorrho

import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { fr_FR } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import fr from '@angular/common/locales/fr';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
registerLocaleData(fr);



import { AppComponent } from './app.component';
import { CoursModuleComponent } from './components/cours-module/cours-module.component';
import { CoursComponent } from './components/cours/cours.component';
import { AuthComponent } from './components/auth/auth.component';
import { ParametreMaquetteComponent } from './components/parametre-maquette/parametre-maquette.component';
import { EvolutionComponent } from './components/evolution/evolution.component';
import { NewCoursComponent } from './new-cours/new-cours.component';
import { MaquetteComponent } from './components/maquette/maquette.component';



@NgModule({
  declarations: [
    AppComponent,
    CoursModuleComponent,
    CoursComponent,
    AuthComponent,
    ParametreMaquetteComponent,
    EvolutionComponent,
    NewCoursComponent,
    MaquetteComponent
  ],

  imports: [
    //start nebular
    // NbSidebarModule, 
    // NbLayoutModule, 
    // NbButtonModule,
    // NbThemeModule,
    //end nebular


    //start ng-zorrho
    NzLayoutModule,
    NzModalModule,
    NzProgressModule,
    NzSpaceModule,
    NzImageModule,
    NzInputNumberModule,
    NzTableModule,
    NzSelectModule,
    NzDatePickerModule,
    NzTimePickerModule,
    NzButtonModule,
    NzDropDownModule,
    NzCardModule,
    NzFormModule,
    NzGridModule,
    NzDividerModule,
    NzBreadCrumbModule,
    NzStatisticModule,
    NzTabsModule,
    NzInputModule,
    //end ng-zorrho

    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    ReactiveFormsModule,
    LoadingBarHttpClientModule,
    FormsModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: fr_FR }],
  bootstrap: [AppComponent]
})
export class AppModule { }
