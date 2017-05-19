import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { ParticipantesComponent } from './components/participantes.component';
import { ParticipanteCardComponent } from './components/participanteCard.component';
import { ParticipanteFiltroComponent } from './components/participanteFiltro.component';
import { CheckinButtonComponent } from './components/checkinButton.component';

import { ParticipanteService } from './providers/participante.service';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    ParticipanteFiltroComponent,
    ParticipantesComponent,
    ParticipanteCardComponent,
    CheckinButtonComponent
  ],
  providers: [
    ParticipanteService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
