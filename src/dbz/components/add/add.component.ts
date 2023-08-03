import { Character } from './../../interfaces/character.interface';
import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'dbz-add-character',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character : Character = {
    id:'',
    name:'',
    power:0
  };

  emitCharacter(): void {
    if( this.character.name.length === 0) return;

    this.onNewCharacter.emit(this.character);

    this.character = { id:'', name:'', power: 0 };
  }
}
