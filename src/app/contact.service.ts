import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  //retreiving Contacts
  getContacts(){
    return this.http.get("http://localhost:3000/api/contacts");
  }

  //add Contact
  addContact(newContact){
    return this.http.post("http://localhost:3000/api/contacts", newContact);
  }

  //delete Contact
  deleteContact(id){
    return this.http.delete("http://localhost:3000/api/contacts/"+id);
  }

}
