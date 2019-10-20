$(function() {
	$.sammy('#container', function() {

//		this.debug = true;
		this.disable_push_state = true;

		this.notFound = function() {};

		this.get('#:id', function() {
			var id = this.params.id;
			this.log('POEM NAMED ' + id);
		});
	}).run();
});
