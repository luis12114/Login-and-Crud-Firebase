import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc, docData, updateDoc } from '@angular/fire/firestore';
import { Computer } from '../interfaces/computador';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CrudServicesService {
  constructor(private firestore: Firestore) {}

  add( computer:Computer){
    const info=collection(this.firestore,'computers');
    return addDoc(info,computer);
  }
  get(): Observable<Computer[]> {
    const info = collection(this.firestore, 'computers');
    return collectionData(info, { idField: 'id' }) as Observable<Computer[]>;
  }
  getId(computer:Computer):Observable<Computer[]> {
    const info= doc(this.firestore, `computers/${computer.id}`);
    return docData(info,{ idField: 'id' }) as Observable<Computer[]>
  }

  update(computer:Computer, id:any){
   const info= doc(this.firestore, `computers/${id}`);
   return updateDoc(info,{...computer})
  }

  delete( computer:Computer) {
    const info= doc(this.firestore, `computers/${computer.id}`);
    return deleteDoc(info);
  }
}
