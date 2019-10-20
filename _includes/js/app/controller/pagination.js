$(function() {
	$.sammy('#pagination', 'Common', function() {

		this.bind("run", function() {
			this.$element().show();
		});

		this.helpers({
			paginate: function(id) {
				var poem = this.poem(id);

				var prev = $('a[rel="prev"]', this.$element());
				var next = $('a[rel="next"]', this.$element());

				prev.show();
				next.show();

				if (poem.isFirst()) {
					prev.hide();
					next.attr("href", "#" + poem.next().id());
				} else if (poem.isLast()) {
					next.hide();
					prev.attr("href", "#" + poem.prev().id());
				} else {
					prev.attr("href", "#" + poem.prev().id());
					next.attr("href", "#" + poem.next().id());
				}
			}
		});

		this.get('/', function() {
			this.paginate();
		});

		this.get('#:id', function() {
			this.paginate(this.params.id);
		});
	}).run();
});
