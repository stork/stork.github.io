$(function() {
	$.sammy('#container', function() {

		this.notFound = function() {
			this.log('SAMMY not found');
		};

		this.bind('run', function() {
			this.log('EVENT run');
		});
		this.bind('load', function() {
			this.log('EVENT load');
		});
		this.bind('lookup-route', function() {
			this.log('EVENT lookup-route');
		});
		this.bind('run-route', function() {
			this.log('EVENT run-route');
		});
		this.bind('route-found', function() {
			this.log('EVENT route-found');
		});
		this.bind('event-context-before', function() {
			this.log('EVENT event-context-before');
		});
		this.bind('event-context-after', function() {
			this.log('EVENT event-context-after');
		});
		this.bind('changed', function() {
			this.log('EVENT changed');
		});
		this.bind('error', function() {
			this.log('EVENT error');
		});
		this.bind('check-form-submission', function() {
			this.log('EVENT check-form-submission');
		});
		this.bind('redirect', function() {
			this.log('EVENT redirect');
		});
		this.bind('location-changed', function() {
			this.log('EVENT location-changed');
		});

		this.get('#/', function() {
			this.log('SAMMY home');
		});

		this.get('#:id', function() {
			this.log('POEM NAMED ' + this.params.id);
		});
/*
		this.get(/\#(.*)/, function() {
			this.log('POEM REGEX ' + this.params['splat']);
		});
*/
	}).run();
});
