$(function() {
	$.sammy('#paginator', 'Common', function() {
		this.bind("run", function() {
			this.$element().show();
			$(".pagination-switch").show();
		});

		this.helpers({
			paginate: function(id) {
				$('p.counter').hide();

				var poem = this.poem(id),
					prev = $('a[rel="prev"]', this.$element()),
					next = $('a[rel="next"]', this.$element()),
					all = $('.pagination-switch a[rel="all"]'),
					one = $('.pagination-switch a[rel="one"]'),
					counter = $('#' + poem.id() + ' > p.counter'),
					cPrev = $('a[rel="prev"]', counter),
					cNext = $('a[rel="next"]', counter),
					href, name;

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
				prev.attr("href", href).attr("title", name);
				cPrev.attr("href", href).html("&laquo;&nbsp;" + name);

				href = "#";
				name = "";
				if (!next.hasClass('disabled')) {
					href = "#" + poem.next().id();
					name = poem.next().attr("name");
				}
				next.attr("href", href).attr("title", name);
				cNext.attr("href", href).html(name + "&nbsp;&raquo;");

				all.hide().attr("href", "#/all/" + poem.id());
				one.hide().attr("href", "#/one/" + poem.id());

				switch (this.config('display')) {
					case 'archived':
					case 'unarchived':
					case 'published':
					case 'unpublished':
						all.prepend(this.config('display') + " ").show();
						break;
					case 'all':
						one.show();
						break;
					case 'one':
						all.show();
						counter.show();
						break;
				}

				if (this.config('display') === 'all') {
					one.attr("href", "#/one/" + poem.id()).show();
				} else {
					all.attr("href", "#/all/" + poem.id()).show();
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
