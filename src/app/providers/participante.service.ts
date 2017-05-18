import { Injectable } from '@angular/core';

import { ParticipanteModel } from '../models/participante.model';

@Injectable()
export class ParticipanteService {
  private _participantes: ParticipanteModel[] = [
    { id: 1, nome: 'eduardo', documento: '654321', foto: '/assets/profile.png', checkin: false },
    { id: 2, nome: 'gildson', documento: '123456', foto: '/assets/profile.png', checkin: false },
    { id: 3, nome: 'junior', documento: '123321', foto: '/assets/profile.png', checkin: false },
    { id: 4, nome: 'moisés', documento: '242424', foto: '/assets/profile.png', checkin: false },
  ];

  getAll(): Promise<ParticipanteModel[]> {
    return new Promise<ParticipanteModel[]>((resolve, reject) => {
      resolve(this._participantes);
    });
  }

  getById(id: number): Promise<ParticipanteModel> {
    return new Promise<ParticipanteModel>((resolve, reject) => {
      let index: number = this._participantes.findIndex((participante: ParticipanteModel) => participante.id == id);
      if(index >= 0) {
        resolve(this._participantes[index]);
      } else {
        reject('Participante não encontrado!');
      }
    });
  }

  getByNomeDocumento(nomeDocumento: string): Promise<ParticipanteModel[]> {
    return new Promise<ParticipanteModel[]>((resolve, reject) => {
      let participantes: ParticipanteModel[] = this._participantes;
      if(nomeDocumento.length > 0) {
         participantes = participantes.filter((participante: ParticipanteModel) => {
          return participante.nome.indexOf(nomeDocumento) >= 0 ||
            participante.documento.indexOf(nomeDocumento) >= 0;
        });
      }
      resolve(participantes);
    });
  }

  doCheckinById(id: number): Promise<ParticipanteModel> {
    return this._setCheckin(id, true);
  }

  cancelCheckinById(id: number): Promise<ParticipanteModel> {
    return this._setCheckin(id, false);
  }

  private _setCheckin(id: number, checkin: boolean) {
    return new Promise<ParticipanteModel>((resolve, reject) => {
      let index: number = this._participantes.findIndex((participante: ParticipanteModel) => participante.id == id);
      if(index >= 0) {
        this._participantes[index].checkin = checkin;
        resolve(this._participantes[index]);
      } else {
        reject('Participante não encontrado!');
      }
    });
  }
}
