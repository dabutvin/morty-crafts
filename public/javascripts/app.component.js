(function(app) {
	
	app.AppComponent = ng.core.Component({
		selector: 'morty-crafts',
		templateUrl: 'html/index.html'
	})
	.Class({
		constructor: function(){
			this.items = app.items;
		}
	});

})(window.app || (window.app = {}));