import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UsernameComponent} from './username/username.component';
import {FormsModule} from '@angular/forms';
import {RoomsComponent} from './rooms/rooms.component';
import {HttpClientModule} from '@angular/common/http';
import { RoomComponent } from './room/room.component';
import { UserslistComponent } from './userslist/userslist.component';

@NgModule({
    declarations: [
        AppComponent,
        UsernameComponent,
        RoomsComponent,
        RoomComponent,
        UserslistComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
