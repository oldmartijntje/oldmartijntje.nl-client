import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditorPageComponent } from './pages/editors/code-editor-page/editor-page.component';
import { RailroadinkPageComponent } from './pages/random/railroadink-page/railroadink-page.component';
import { NotFoundPageComponent } from './pages/main/error-pages/not-found-page/not-found-page.component';
import { HomePageComponent } from './pages/main/home-page/home-page.component';
import { ApplicationPageComponent } from './pages/main/application-page/application-page.component';
import { AdflyPageComponent } from './pages/other/adfly-page/adfly-page.component';
import { MessagePageComponent } from './pages/other/message-page/message-page.component';
import { ProjectGalleryPageComponent } from './pages/other/project-gallery-page/project-gallery-page.component';
import { ContentPlayerPageComponent } from './pages/other/content-player-page/content-player-page.component';
import { TestingPageComponent } from './pages/other/testing-page/testing-page.component';
import { RandomDisplayPageComponent } from './pages/random/random-display-page/random-display-page.component';
import { FunkyCssPageComponent } from './pages/random/funky-css-page/funky-css-page.component';
import { GameListComponent } from './pages/main/nintendo-switch/game-list.component';
import { HomepageDeciderComponent } from './components/other/homepage-decider/homepage-decider.component';
import { StepTrackerPageComponent } from './pages/other/step-tracker-page/step-tracker-page.component';
import { TerminalComponent } from './components/global/terminal/terminal.component';
import { EmptyComponent } from './components/other/empty/empty.component';
import { NavigatorPageComponent } from './pages/other/navigator-page/navigator-page.component';
import { BlueScreenComponent } from './pages/other/aprilFoolsJokes/blue-screen/blue-screen.component';
import { FancyNotFoundPageComponent } from './pages/main/error-pages/fancy-not-found-page/fancy-not-found-page.component';
import { AchievementCollectionPageComponent } from './pages/main/achievement-collection-page/achievement-collection-page.component';
import { MapEditorPageComponent } from './pages/editors/map-editor-page/map-editor-page.component';
import { MinecraftPageComponent } from './pages/random/minecraft-page/minecraft-page.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/home' },
    { path: 'home', component: HomepageDeciderComponent },
    { path: 'windows', component: HomePageComponent },
    { path: 'Editor', component: EditorPageComponent },
    { path: 'MapEditor', component: MapEditorPageComponent },
    { path: 'Railroad', component: RailroadinkPageComponent },
    { path: 'AdBee', component: AdflyPageComponent },
    { path: 'Chat', component: MessagePageComponent },
    { path: 'Projects', component: ProjectGalleryPageComponent },
    { path: 'Player', component: ContentPlayerPageComponent },
    { path: 'Test', component: TestingPageComponent },
    { path: 'ItemDisplay', component: RandomDisplayPageComponent },
    { path: 'FunkyCSS', component: FunkyCssPageComponent },
    { path: 'nintendo', component: GameListComponent },
    { path: 'StepTracker', component: StepTrackerPageComponent },
    { path: 'index', component: TerminalComponent },
    { path: 'index.php', component: TerminalComponent },
    { path: 'void', component: EmptyComponent },
    { path: 'link', component: NavigatorPageComponent },
    { path: 'blueScreen', component: BlueScreenComponent },
    { path: 'Fancy404', component: FancyNotFoundPageComponent },
    { path: 'achievements', component: AchievementCollectionPageComponent },
    { path: 'minecraft', component: MinecraftPageComponent },

    //   { path: 'Store/Category/:View', component: StorePageComponent },
    //   { path: 'Datapage', component: DataPageComponent },

    { path: '404', component: NotFoundPageComponent },
    { path: '**', component: NotFoundPageComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
