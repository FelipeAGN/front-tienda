import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultBook = [];
    for(const book of value){
      if(book.title.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultBook.push(book);
      }
    }
    return resultBook;
  }

}
