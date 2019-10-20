$(function() {
	$.sammy('#well', 'Common', function() {

		this.get('#/:command', function() {});
		this.get('#/:command/:id', function() {});

		this.get('/', function() {
			this.$element().show();
		});

		this.get('#:id', function() {
			if (this.config('display') === 'all' || id !== this.poem(this.params.id).id()) {
				this.$element().show();
			} else {
				this.$element().hide();
			}
		});
	}).run();
});
