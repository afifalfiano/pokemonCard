import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { HeaderComponent } from './header/header.component';
import { PokeCardComponent } from './poke-card/poke-card.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { FooterComponent } from './footer/footer.component';
import { NgxPaginationModule} from 'ngx-pagination';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [

    AppComponent,
    HeaderComponent,
    PokeCardComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    LazyLoadImageModule,
    NgxPaginationModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
