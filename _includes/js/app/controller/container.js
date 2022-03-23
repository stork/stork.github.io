$(function() {
	$.sammy('#container', 'Common', 'NoCommand', 'Title', 'GoogleAnalytics', function() {
		this.setTitle(function(title) {
			return [title, " | Žblebty"].join('');
		});

		this.bind("run", function() {
			$.app.model.Poem.load(poems);
		});

		this.helpers({
			renderPoem: function(id) {
				var el = this.$element(),
					display = this.config('display'),
					show = function() {
						$("article#" + this.attr("id"), el).show();
					};

				switch (display) {
					case 'archived':
					case 'published':
						this.title('FILTER ' + display);
						$("article", el).hide();
						$.app.model.Poem.byAttribute(display, true).each(show);
						break;
					case 'unarchived':
					case 'unpublished':
						this.title('FILTER ' + display);
						$("article", el).hide();
						$.app.model.Poem.byAttribute(display, false).each(show);
						break;
					case 'all':
						this.title(this.poem(id).attr("name"));
						$("article", el).show();
						break;
					case 'one':
						var poem = this.poem(id),
							hash = "#" + poem.id();
						this.title(poem.attr("name"));
						$("article" + hash, el).show();
						$("article", el).not(hash).hide();
						break;
				}
			}
		});

		this.get('/', function() {
			this.renderPoem();
		});

		this.get('#:id', function() {
			this.renderPoem(this.params.id);
		});
	}).run();
});
