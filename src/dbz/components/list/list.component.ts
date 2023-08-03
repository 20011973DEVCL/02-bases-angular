import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from 'src/dbz/interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Output()
  public onDeleted: EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList: Character[]=[{
    id: uuid(),
    name: 'Trunks',
    power: 10
  }];

  onDeleteCharacter(id: string): void {
   console.log({id});

   if ( !id ) return;
   this.onDeleted.emit(id);
  }
}
