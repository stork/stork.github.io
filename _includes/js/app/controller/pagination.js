$(function() {
	$.sammy('#pagination', 'Common', function() {
		this.bind("run", function() {
			this.$element().show();
			$(".pagination-switch").show();
		});

		this.helpers({
			paginate: function(id) {
				$('p.counter').hide();

				var poem = this.poem(id);
				var prev = $('a[rel="prev"]', this.$element());
				var next = $('a[rel="next"]', this.$element());
				var all = $('.pagination-switch a[rel="all"]');
				var one = $('.pagination-switch a[rel="one"]');
				var counter = $('#' + poem.id() + ' > p.counter');
				var cPrev = $('a[rel="prev"]', counter);
				var cNext = $('a[rel="next"]', counter);
				var href, name;

				prev.hide();
				next.hide();
				cPrev.hide();
				cNext.hide();
				if (!poem.isFirst()) {
					prev.show();
					cPrev.show();
				}
				if (!poem.isLast()) {
					next.show();
					cNext.show();
				}

				if (prev.is(":visible")) {
					href = "#" + poem.prev().id();
					name = poem.prev().attr("name");
					prev.attr("href", href);
					prev.attr("title", name);
					cPrev.attr("href", href);
					cPrev.attr("html", name);
				}
				if (next.is(":visible")) {
					href = "#" + poem.next().id();
					name = poem.next().attr("name");
					next.attr("href", href);
					next.attr("title", name);
					cNext.attr("href", href);
					cNext.attr("html", name);
				}

				all.hide();
				one.hide();
				if (this.config('display') === 'all') {
					one.attr("href", "#/one/" + poem.id());
					one.show();
				} else {
					all.attr("href", "#/all/" + poem.id());
					all.show();
					counter.show();
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
