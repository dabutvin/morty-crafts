import {Component} from 'angular2/core';
import {Items} from './items';

@Component({
	selector: 'morty-crafts',
	templateUrl: 'html/index.html'
})

export class AppComponent { 
	word = 'asdas';
	items = new Items().data;
}