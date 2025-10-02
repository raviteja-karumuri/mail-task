import { Injectable } from '@angular/core';
import { MailItem } from '../models/mail-item.model';
import { Observable, of } from 'rxjs';
import { Folder } from '../models/folder.model';

@Injectable({
  providedIn: 'root'
})
export class Dataservice {
  private mailItems: MailItem[] = [
    {
      id: 1,
      name: 'Inbox',
      icon: '/assets/images/noun_contact_2984932.png',
      count: 20,
    },
    {
      id: 2,
      name: 'Flagged',
      icon: '/assets/images/noun_Star_2986785.png',
      count: 5,
    },
    {
      id: 3,
      name: 'Draft',
      icon: '/assets/images/noun_Box_2466558.png',
      count: 1,
    },
    {
      id: 4,
      name: 'Sent',
      icon: '/assets/images/noun_sent_61680.png',
      count: 500,
    },
    {
      id: 5,
      name: 'Trash',
      icon: '/assets/images/noun_Trash_1526083.png',
      count: 10000,
    },
    {
      id: 6,
      name: 'Archived',
      icon: '/assets/images/noun_Star_2986785.png',
      count: 1000,
    },
  ];

  private folders: Folder[] = [{
    id: 1,
    name: 'Office',
    foldericon: 'noun_Folder_1558235.png'
  },
  {
    id: 2,
    name: 'Personal',
    foldericon: 'noun_Folder_1558235-1.png'
  },
  {
    id: 3,
    name: 'Freelance',
    foldericon: 'noun_Folder_1558235-2.png'
  },
  ];

  getMailItems(): Observable<MailItem[]> {
    return of(this.mailItems);
  }

  getFolder(): Observable<Folder[]>{
    return of(this.folders);
  }

  addFolder(folder: Folder){
    folder.id = this.folders.length + 1;
    this.folders.push(folder);
  }
}
