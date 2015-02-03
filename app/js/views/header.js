
define([
	'view',
	'text!templates/header.html',
], function( View, Template ){

	var Header = View.Item.extend({
		template: Template,
		init: function( params ){
			console.log('Header Created');
		}
	});

	return Header;

});
