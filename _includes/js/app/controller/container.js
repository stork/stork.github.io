$(function() {
	$.sammy('#container', 'Common', 'Title', function() {
		this.setTitle(function(title) {
			return [title, " | Žblebty"].join('');
		});

		this.bind("run", function() {
			$.app.model.Poem.load(poems);
		});

		this.helpers({
			renderPoem: function(id) {
//TODO get settings for adjusting rendering all/one
				var el = this.$element();
				$("article", el).hide();

				var poem = this.poem(id);
				if (id != poem.id()) {
//TODO set location but do not re-run route for it
				}

				this.title(poem.attr("name"));
				$("article#" + poem.id(), el).show();
			}
		});

		this.get('#/:command', function() {});
		this.get('#/:command/:id', function() {});

		this.get('/', function() {
			this.renderPoem();
		});

		this.get('#:id', function() {
			this.renderPoem(this.params.id);
		});
	}).run();
});
