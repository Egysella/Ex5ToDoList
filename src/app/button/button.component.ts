import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent{
  @Output()
  eventoButton: EventEmitter<any> = new EventEmitter<any>()
  
  addTarefa(): void{
    this.eventoButton.emit()
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
