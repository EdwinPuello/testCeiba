import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterUserByName',
})
export class FilterUserByNamePipe implements PipeTransform {

  transform(value: any, arg:any):any{
    if(arg === '' || arg.length < 3) return value
    const resultPost = [];
    for(const post of value){
      if(post.last_name.toLowerCase().indexOf(arg.toLowerCase()) > -1 || post.first_name.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultPost.push(post)
      }
    }
   return resultPost
  }

}
