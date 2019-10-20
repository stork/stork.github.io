$(function() {
	$.sammy('#pagination', 'Common', function() {

		this.get('/', function() {
		});

		this.get('#:id', function() {
		});
	}).run();
});
