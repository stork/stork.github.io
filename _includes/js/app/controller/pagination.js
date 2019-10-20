$(function() {
	$.sammy('#pagination', 'Common', function() {

		this.bind("run", function() {
			$(".pagination-panel").show();
		});

		this.helpers({
			paginate: function(id) {
				var el = $(".pagination-panel");
				var poem = this.poem(id);
				var prev = $('a[rel="prev"]', el);
				var next = $('a[rel="next"]', el);

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
