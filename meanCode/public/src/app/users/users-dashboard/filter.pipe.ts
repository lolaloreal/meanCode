import { Pipe, PipeTransform } from '@angular/core';
import { User } from './../user'
import { Poll } from './poll'

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(poll_array: Array<Poll>, search: string): Array<Poll> {
    search = search.toLowerCase()
    return poll_array.filter(poll => {
    return poll.question.toLowerCase().includes(search)
})
  }

}

 // || poll.author.toLowerCase().includes(search)
