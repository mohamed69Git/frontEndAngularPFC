import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
// import { FormGroup } from '@angular/forms';
// import { FormControl } from '@angular/forms';
import { NzBreadCrumbModule} from 'ng-zorro-antd/breadcrumb'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { fr_FR } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import fr from '@angular/common/locales/fr';
// import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { DepenseComponent } from './components/depense/depense.component';
import { RevenusComponent } from './components/revenus/revenus.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';


registerLocaleData(fr);

@NgModule({
  declarations: [
    AppComponent,
    DepenseComponent,
    RevenusComponent,
    SidebarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    // FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzMenuModule,

    // FormsModule,
    // FormGroup,
    // FormControl,
    ReactiveFormsModule

  ],
  providers: [{ provide: NZ_I18N, useValue: fr_FR }],
  bootstrap: [AppComponent]
})
export class AppModule { }
