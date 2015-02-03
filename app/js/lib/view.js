

/*

	Basic view with some additional functionality:

 */


define([
	'underscore',
	'backbone',
	'jquery',
	'events',
], function( _, Backbone, $, Events ){

	var ItemView = Backbone.View.extend({
		renderOnChange: true,
		initialize: function( params ){
			// Compile the template to a function
			this.template = _.template( this.template || '' );
			// Global Event Emitter:
			this.eventEmitter = Events;
			// Call init on sub views
			this.init.apply(this, arguments);
			// Extend this views:
			_.extend(this.events, ItemView.prototype.events);
			// If this view has a model, listen for changes
			if(this.model && this.renderOnChange === true){
				this.listenTo( this.model, 'change', this.render.bind(this) );
				this.listenTo( this.model, 'error', this.onError.bind(this) );
			}
			// Bind functions
			_.bindAll(this,'onRender', 'render');
		},

		render: function(){
			this.$el.html( this.template( this.model ) );
			this.onRender();
			return this;
		},

		// Over ride in child views:
		init: function(){ },
		onRender: function(){ },
		unRender: function(){
			this.$el.html('');
		},
		onError: function( e, req ){
			this.eventEmitter.trigger('ajaxError', e, req);
		}

	});


	var ListView = Backbone.View.extend({
		initialize: function( params ){
			_.extend( this, params );
			// Compile the template to a function
			this.template = _.template( this.template || '' );
			// Global Event Emitter:
			this.eventEmitter = Events;
			// Call init on sub views
			this.init.apply(this, arguments);
			// Extend this views:
			_.extend(this.events, ListView.prototype.events);
			// If this view has a model, listen for changes
			if(this.collection){
				this.listenTo( this.collection, 'change', this.render );
				this.listenTo( this.collection, 'add', this.render );
				this.listenTo( this.collection, 'remove', this.render );
			}
			// Bind functions
			_.bindAll(this,'onRender', 'render');
			if(this.collection)
				this.collection.fetch();
		},
		
		renderItems: function(){
			_.each(this.collection.models, this.renderItem.bind(this));
		},

		render: function(){
			if(this.collection.models.length <= 0)
				return this.$el.html('Loading...');
			this.$el.html( this.template( this.collection ) );
			this.renderItems();
			this.onRender();
			return this;
		},

		// Over ride in child views:
		init: function(){ },
		renderItem: function(){ },
		onRender: function(){ }

	});

	return {
		Item: ItemView,
		List: ListView
	};

});