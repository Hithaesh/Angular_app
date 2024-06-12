import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent implements OnInit {
  // Whatever which is inside the class, can be used in .html page.

  @Input() text: String = '';
  @Input() color: String | undefined;

  @Input() dummy: string = ""
  //Todo: If we click on button (ADD), to do something.
  @Output() btnClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    
  }

  onClick() {
    this.btnClick.emit();
  } 


}
