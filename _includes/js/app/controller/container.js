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
				var el = this.$element();
				var poem = this.poem(id);

				this.title(poem.attr("name"));

				if (this.config('display') === 'all') {
					$("article", el).show();
				} else {
//					$("article", el).hide();
					$("article#" + poem.id(), el).show();
                                        $("article", el).not("#" + poem.id()).hide();
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
