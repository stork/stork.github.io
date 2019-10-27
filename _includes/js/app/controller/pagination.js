$(function() {
	$.sammy('#pagination', 'Common', function() {
		this.bind("run", function() {
			this.$element().show();
			$(".pagination-switch").show();
		});

		this.helpers({
			paginate: function(id) {
				var poem = this.poem(id);
				var prev = $('a[rel="prev"]', this.$element());
				var next = $('a[rel="next"]', this.$element());
				var all = $('.pagination-switch a[rel="all"]');
				var one = $('.pagination-switch a[rel="one"]');

				prev.hide();
				next.hide();
				if (!poem.isFirst()) {
					prev.show();
				}
				if (!poem.isLast()) {
					next.show();
				}

				if (prev.is(":visible")()) {
					prev.attr("href", "#" + poem.prev().id());
					prev.attr("title", poem.prev().attr("name"));
				}
				if (next.is(":visible")()) {
					next.attr("href", "#" + poem.next().id());
					next.attr("title", poem.next().attr("name"));
				}

				all.hide();
				one.hide();
				if (this.config('display') === 'all') {
					one.attr("href", "#/one/" + poem.id());
					one.show();
				} else {
					all.attr("href", "#/all/" + poem.id());
					all.show();
				}
			},
			displayCommand: function(command, id) {
				if (command === 'all' || command === 'one') {
					this.config('display', command);
				}
				this.redirect("#" + this.poem(id).id());
			}
		});

		this.get('#/:command', function() {
			this.displayCommand(this.params.command);
		});

		this.get('#/:command/:id', function() {
			this.displayCommand(this.params.command, this.params.id);
		});

		this.get('/', function() {
			this.paginate();
		});

		this.get('#:id', function() {
			this.paginate(this.params.id);
		});
	}).run();
});
