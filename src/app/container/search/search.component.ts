import { Component, EventEmitter, Output, ElementRef, ViewChild } from '@angular/core';

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

  @ViewChild('searchInput')
  searchInputEle: ElementRef;

  onSearchTextChanged() {
    // this.searchTextchanged.emit(this.searchText);
  }

  updateSearchText() {
    //   this.searchText = event.target.value;
    this.searchText = this.searchInputEle.nativeElement.value;
    this.searchTextchanged.emit(this.searchText);
  }
}
