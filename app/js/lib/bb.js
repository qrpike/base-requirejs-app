
define([
	'view',
	'events',
	'text!templates/header.html'
], function( View, Events, Template ){


	var Collection = Backbone.Collection.extend({
		fetch: function(options) {
			options || ( options = {} );
			var data = ( options.data || {} );
			options.data = {
				token: localStorage.getItem('token') || null,
				key: localStorage.getItem('key') || null,
				processData: true
			};
			return Backbone.Collection.prototype.fetch.call(this, options);
		}
	});

	var Model = Backbone.Model.extend({
		fetch: function(options) {
			options || ( options = {} );
			var data = ( options.data || {} );
			options.data = {
				token: localStorage.getItem('token') || null,
				key: localStorage.getItem('key') || null
			};
			options.processData = true;
			return Backbone.Model.prototype.fetch.call(this, options);
		},
		save: function(data, options) {
			options = options || {};
			var data = options.data || this.attributes;
			_.extend(data, {
				token: localStorage.getItem('token') || null,
				key: localStorage.getItem('key') || null
			});
			return Backbone.Model.prototype.save.call(this, data, options);
		},
		destroy: function(options) {
			options || ( options = {} );
			var data = ( options.data || {} );
			options.data = {
				token: localStorage.getItem('token') || null,
				key: localStorage.getItem('key') || null
			};
			options.processData = true;
			return Backbone.Model.prototype.destroy.call(this, options);
		}
	});

	return {
		Collection: Collection,
		Model: Model
	};

});