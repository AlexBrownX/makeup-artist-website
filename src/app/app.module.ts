import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { AngularFireModule} from '@angular/fire';

import { SafePipe } from './SafePipe.pipe';
import { ScriptService } from './script-loader.service';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { AboutMePageComponent } from './about-me-page/about-me-page.component';
import { GalleryPageComponent } from './gallery-page/gallery-page.component';
import { PricesPageComponent } from './prices-page/prices-page.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { ReturnSectionComponent } from './return-section/return-section.component';
import { FooterComponent } from './footer/footer.component';
import { TestimonialsPageComponent } from './testimonials-page/testimonials-page.component';
import { MagazineWorkPageComponent } from './magazine-work-page/magazine-work-page.component';


@NgModule({
  declarations: [
    SafePipe,
    AppComponent,
    NavigationComponent,
    WelcomePageComponent,
    AboutMePageComponent,
    GalleryPageComponent,
    BlogPageComponent,
    MagazineWorkPageComponent,
    TestimonialsPageComponent,
    ContactPageComponent,
    NotFoundPageComponent,
    ReturnSectionComponent,
    FooterComponent,
    PricesPageComponent
],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [ScriptService],
  bootstrap: [AppComponent]
})

export class AppModule { }
