import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchText: string = '';

  //create an event and decorate it with @Output() decorator to make it available outside the component
  @Output()
  searchTextchanged: EventEmitter<string> = new EventEmitter<string>();

  onSearchTextChanged() {
    // this.searchTextchanged.emit(this.searchText);
  }

  updateSearchText(inputElement: HTMLInputElement) {
    //   this.searchText = event.target.value;
    console.log(inputElement);
    this.searchText = inputElement.value;
    this.searchTextchanged.emit(this.searchText);
  }
}
