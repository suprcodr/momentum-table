import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  selectedRows;
  countries;
  constructor() {
    this.countries = [
      {'country': 'Afghanistan', 'capital': 'Kabul', 'continent': 'Asia', 'flag': 'http://www.sciencekids.co.nz/images/pictures/flags96/Afghanistan.jpg'},
      {'country': 'India', 'capital': 'New Delhi', 'continent': 'Asia', 'flag': 'http://www.sciencekids.co.nz/images/pictures/flags96/India.jpg'},
      {'country': 'Iraq', 'capital': 'Baghdad', 'continent': 'Asia', 'flag': 'http://www.sciencekids.co.nz/images/pictures/flags96/Iraq.jpg'},
      {'country': 'Bhutan', 'capital': 'Thimphu', 'continent': 'Asia', 'flag': 'http://www.sciencekids.co.nz/images/pictures/flags96/Bhutan.jpg'},
      {'country': 'Pakistan', 'capital': 'Islamabad', 'continent': 'Asia', 'flag': 'http://www.sciencekids.co.nz/images/pictures/flags96/Pakistan.jpg'},
      {'country': 'France', 'capital': 'Paris', 'continent': 'Europe', 'flag': 'http://www.sciencekids.co.nz/images/pictures/flags96/France.jpg'},
      {'country': 'Germany', 'capital': 'Berlin', 'continent': 'Europe', 'flag': 'http://www.sciencekids.co.nz/images/pictures/flags96/Germany.jpg'},
      {'country': 'Ireland', 'capital': 'Dublin', 'continent': 'Europe', 'flag': 'http://www.sciencekids.co.nz/images/pictures/flags96/Ireland.jpg'},
      {'country': 'Austria', 'capital': 'Vienna', 'continent': 'Europe', 'flag': 'http://www.sciencekids.co.nz/images/pictures/flags96/Austria.jpg'},
      {'country': 'Bulgaria', 'capital': 'Sofia', 'continent': 'Europe', 'flag': 'http://www.sciencekids.co.nz/images/pictures/flags96/Bulgaria.jpg'},
      {'country': 'Cuba', 'capital': 'Havana', 'continent': 'America', 'flag': 'http://www.sciencekids.co.nz/images/pictures/flags96/Cuba.jpg'},
      {'country': 'Canada', 'capital': 'Ottawa', 'continent': 'America', 'flag': 'http://www.sciencekids.co.nz/images/pictures/flags96/Canada.jpg'},
      {'country': 'Jamaica', 'capital': 'Kingston', 'continent': 'America', 'flag': 'http://www.sciencekids.co.nz/images/pictures/flags96/Jamaica.jpg'}
    ];
  }

  ngOnInit(){
    this.selectedRows = [{'country': 'India', 'capital': 'New Delhi', 'continent': 'Asia', 'flag': 'https://www.countries-ofthe-world.com/flags-normal/flag-of-India.png'}];
  }

  changeSort(event) {
    console.log(event);
  };

  rowClick(event) {
    console.log('click', event);
  }

  rowSelect(event) {
    console.log('select', event);
  }

  rowUnselect(event) {
    console.log('unselect', event);
  }

  onSelectionChange(event){
    console.log('selectionChange', event);
  }

  flagHeaderClick(col){
    console.log('flagHeaderClick ==>', col);
  }

  flagClicked(event, row){
    console.log('flagClicked ==>', row);
    event.stopPropagation();
  }
}