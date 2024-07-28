import { Component, computed, effect, signal } from '@angular/core';
import { User } from '../../interfaces/user-request.interface';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent {
  public user = signal<User>({
    id: 1,
    email: 'test@test.com',
    first_name: 'Test',
    last_name: 'User',
    avatar: 'https://reqres.in/img/faces/1-image.jpg'
  });
  public counter = signal(0);
  public fullName = computed(() => `${this.user().first_name} ${this.user().last_name}`);
  public userChangeEffect = effect(() => {
    console.log(`counter: ${this.counter()}`);
    
  });

  increaseBy(value: number){
    this.counter.update(current => current + value);
  }

  onFieldUpdated(field: keyof User, value: string) {
    // this.user.set({
    //   ...this.user(),
    //   [field]: value
    // })

    this.user.update(current => ({
      ...current,
      [field]: value
    }));
  }
}
