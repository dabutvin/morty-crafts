import {Component} from 'angular2/core';
import {Items} from './items';
import {FilterTextboxComponent} from './filter-textbox-component';

@Component({
	selector: 'morty-crafts',
	directives: [FilterTextboxComponent],
	templateUrl: 'html/index.html'
})

export class AppComponent { 
	word = 'asdas';
	items = new Items().data;
	filteredItems = this.items;

	filterChanged(data: string) {
		if(data) {
			data = data.toUpperCase();
			let props = ['name', 'desc'];
			this.filteredItems = this.items.filter( item => {
				let match = false;
				for (let prop of props)	{

					if(item[prop].toString().toUpperCase().indexOf(data) > -1) {
						match = true;
						break;
					}
				}

				return match;
			});
		} else {
			this.filteredItems = this.items;
		}
	}
}