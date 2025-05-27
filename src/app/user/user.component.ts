import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from './user.model';

//Input= decorator; input= special function, it's a signal input
@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  //the decorator approach
  @Input({ required: true }) user!: User;

  @Output() select = new EventEmitter<string>();

  //keep in mind, this are SIGNALS!!!!
  // avatar = input.required<string>();
  // name = input.required<string>();
  //this is still an eventemitter
  // select = output.required<string>();
  //using computed so that the imagePath will recomput only when the avatar changes
  // imagePath = computed(() => {
  //   return 'images/users/' + this.avatar;
  // });

  get imagePath() {
    return 'images/users/' + this.user.avatar;
  }
  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
