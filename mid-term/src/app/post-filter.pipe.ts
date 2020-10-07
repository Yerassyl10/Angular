import { Pipe, PipeTransform } from '@angular/core';
import {User} from './models/user'

@Pipe({
  name: 'postFilter'
})
export class PostFilterPipe implements PipeTransform {

  transform(user: User[], searchInput:string): User[] {
    if(!user || !searchInput){
      return user;
    }
    return user.filter(user => user.name.toLowerCase().indexOf(searchInput.toLowerCase())!== -1);
  }

}
