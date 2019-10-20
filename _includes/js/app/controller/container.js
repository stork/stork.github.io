$(function() {
	$.sammy('#container', function() {

		this.debug = true;
		this.disable_push_state = true;

		this.notFound = function() {
			this.log('SAMMY not found');
		};

		this.get('/', function() {
			this.log('SITE home');
		});

		this.get('#/', function() {
			this.log('SAMMY home');
		});

		this.get('#:id', function() {
			this.log('POEM NAMED ' + this.params.id);
		});

		this.get(/\#(.*)/, function() {
			this.log('POEM REGEX ' + this.params['splat']);
		});

	}).run();
});
