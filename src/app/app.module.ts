import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { blogReducer } from './shared/blog/reducers/blog.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ChangeCategoryEffects } from './shared/blog/effects/change-category.effect';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    StoreModule.forRoot({ blog: blogReducer }),
    EffectsModule.forRoot([ChangeCategoryEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
