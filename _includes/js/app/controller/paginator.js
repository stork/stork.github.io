$(function() {
	$.sammy('#paginator', 'Common', function() {
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

				prev.addClass('disabled');
				next.addClass('disabled');
				cPrev.hide();
				cNext.hide();
				if (!poem.isFirst()) {
					prev.removeClass('disabled');
					cPrev.show();
				}
				if (!poem.isLast()) {
					next.removeClass('disabled');
					cNext.show();
				}

				href = "#";
				name = "";
				if (!prev.hasClass('disabled')) {
					href = "#" + poem.prev().id();
					name = poem.prev().attr("name");
				}
				prev.attr("href", href);
				prev.attr("title", name);
				cPrev.attr("href", href);
				cPrev.html("&laquo;&nbsp;" + name);

				href = "#";
				name = "";
				if (!next.hasClass('disabled')) {
					href = "#" + poem.next().id();
					name = poem.next().attr("name");
				}
				next.attr("href", href);
				next.attr("title", name);
				cNext.attr("href", href);
				cNext.html(name + "&nbsp;&raquo;");

				all.hide();
				one.hide();
				if (this.config('display') === 'all') {
					one.attr("href", "#/one/" + poem.id());
					one.show();
				} else {
					all.attr("href", "#/all/" + poem.id());
					all.show();
					if (this.config('display') === 'one') {
						counter.show();
					}
				}
			},
			displayCommand: function(command, id) {
				id = id || false;
				var uri = id ? "#" + this.poem(id).id() : "/";
				switch (command) {
					case 'archived':
					case 'unarchived':
					case 'published':
					case 'unpublished':
					case 'all':
					case 'one':
						this.config('display', command);
						this.redirect(uri);
						break;
				}
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
