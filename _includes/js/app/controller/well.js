$(function() {
	$.sammy('#well', 'Common', 'NoCommand', function() {
		this.get('/', function() {
			this.$element().show();
		});

		this.get('#:id', function() {
			if (this.config('display') === 'all') {
				this.$element().show();
			} else {
				this.$element().hide();
			}
		});
	}).run();
});
