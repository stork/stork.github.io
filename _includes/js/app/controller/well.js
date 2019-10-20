$(function() {
	$.sammy('#well', 'Common', function() {

		this.get('/', function() {
			this.$element().show();
		});

		this.get('#:id', function() {
			var id = this.params.id;
			var poem = this.poem(id);

			if (id != poem.id() || poem.isFirst() || poem.isLast()) {
				this.$element().show();
			} else {
				this.$element().hide();
			}
		});
	}).run();
});
