
/*

	Creates a basic Backbone Event for passing events around
	the app.

 */

define([
	'backbone',
	'underscore'
], function(Backbone, _){

	var GlobalEvents = {};
	_.extend(GlobalEvents, Backbone.Events);

	return GlobalEvents;

});