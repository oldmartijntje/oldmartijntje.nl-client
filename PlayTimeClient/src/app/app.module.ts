import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { AngularSplitModule } from 'angular-split';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MONACO_PATH, MonacoEditorModule } from '@materia-ui/ngx-monaco-editor';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { DatePipe } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CdkDrag } from '@angular/cdk/drag-drop';
import { MatOptionModule } from '@angular/material/core';
import { AsyncPipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatProgressBarModule } from '@angular/material/progress-bar'
import { MatMenuModule } from '@angular/material/menu';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastPopupComponent } from './components/global/toast-popup/toast-popup.component';
import { EditorPageComponent } from './pages/editors/code-editor-page/editor-page.component';
import { RailroadinkPageComponent } from './pages/random/railroadink-page/railroadink-page.component';
import { NotFoundPageComponent } from './pages/main/error-pages/not-found-page/not-found-page.component';
import { ErrorPageComponent } from './pages/main/error-pages/error-page/error-page.component';
import { HomePageComponent } from './pages/main/home-page/home-page.component';
import { ApplicationPageComponent } from './pages/main/application-page/application-page.component';
import { MobileApplicationPageComponent } from './pages/main/mobile-application-page/mobile-application-page.component';
import { TaskManagerComponent } from './components/applications/task-manager/task-manager.component';
import { CoinClickerGameComponent } from './components/other/coin-clicker-game/coin-clicker-game.component';
import { AdflyPageComponent } from './pages/other/adfly-page/adfly-page.component';
import { MessagePageComponent } from './pages/other/message-page/message-page.component';
import { UiElementComponent } from './components/other/ui-element/ui-element.component';
import { ProjectGalleryPageComponent } from './pages/other/project-gallery-page/project-gallery-page.component';
import { ContentPlayerPageComponent } from './pages/other/content-player-page/content-player-page.component';
import { VisualNovelComponent } from './components/other/visual-novel/visual-novel.component';
import { GlitchTextComponent } from './components/other/glitch-text/glitch-text.component';
import { TestingPageComponent } from './pages/other/testing-page/testing-page.component';
import { RandomDisplayPageComponent } from './pages/random/random-display-page/random-display-page.component';
import { FunkyCssPageComponent } from './pages/random/funky-css-page/funky-css-page.component';
import { HoverGlitchTextComponent } from './components/global/hover-glitch-text/hover-glitch-text.component';
import { GameListComponent } from './pages/main/nintendo-switch/game-list.component';
import { HomepageDeciderComponent } from './components/other/homepage-decider/homepage-decider.component';
import { StepTrackerPageComponent } from './pages/other/step-tracker-page/step-tracker-page.component';
import { MagnifierComponent } from './components/global/magnifier/magnifier.component';
import { TerminalComponent } from './components/global/terminal/terminal.component';
import { EmptyComponent } from './components/other/empty/empty.component';
import { GameTheoryComponent } from './components/global/game-theory/game-theory.component';
import { NavigatorPageComponent } from './pages/other/navigator-page/navigator-page.component';
import { BlueScreenComponent } from './pages/other/aprilFoolsJokes/blue-screen/blue-screen.component';
import { FancyNotFoundPageComponent } from './pages/main/error-pages/fancy-not-found-page/fancy-not-found-page.component';
import { AchievementCollectionPageComponent } from './pages/main/achievement-collection-page/achievement-collection-page.component';
import { MapEditorPageComponent } from './pages/editors/map-editor-page/map-editor-page.component';
import { IframeGameLoaderComponent } from './components/other/iframe-game-loader/iframe-game-loader.component';
import { MinecraftPageComponent } from './pages/random/minecraft-page/minecraft-page.component';

@NgModule({
    declarations: [
        AppComponent,
        ToastPopupComponent,
        EditorPageComponent,
        RailroadinkPageComponent,
        NotFoundPageComponent,
        HomePageComponent,
        ApplicationPageComponent,
        MobileApplicationPageComponent,
        TaskManagerComponent,
        CoinClickerGameComponent,
        AdflyPageComponent,
        ErrorPageComponent,
        MessagePageComponent,
        UiElementComponent,
        ProjectGalleryPageComponent,
        ContentPlayerPageComponent,
        VisualNovelComponent,
        GlitchTextComponent,
        TestingPageComponent,
        RandomDisplayPageComponent,
        FunkyCssPageComponent,
        HoverGlitchTextComponent,
        GameListComponent,
        HomepageDeciderComponent,
        StepTrackerPageComponent,
        MagnifierComponent,
        TerminalComponent,
        EmptyComponent,
        GameTheoryComponent,
        NavigatorPageComponent,
        BlueScreenComponent,
        FancyNotFoundPageComponent,
        AchievementCollectionPageComponent,
        MapEditorPageComponent,
        IframeGameLoaderComponent,
        MinecraftPageComponent,
    ],
    imports: [
        AsyncPipe,
        MatOptionModule,
        ReactiveFormsModule,
        MatMenuModule,
        MatAutocompleteModule,
        BrowserModule,
        MatInputModule,
        MatProgressBarModule,
        AngularSplitModule,
        AppRoutingModule,
        FormsModule,
        MonacoEditorModule,
        MatSelectModule,
        MatFormFieldModule,
        BrowserAnimationsModule,
        MatIconModule,
        MatDividerModule,
        MatButtonModule,
        MatCheckboxModule,
        MatTableModule,
        CdkDrag,
        HttpClientModule
    ],
    providers: [{
        provide: MONACO_PATH,
        useValue: 'https://unpkg.com/monaco-editor@0.24.0/min/vs'
    },
        DatePipe
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
