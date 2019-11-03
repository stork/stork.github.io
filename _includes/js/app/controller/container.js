$(function() {
	$.sammy('#container', 'Common', 'Title', 'GoogleAnalytics', function() {
		this.setTitle(function(title) {
			return [title, " | Žblebty"].join('');
		});

		this.bind("run", function() {
			var lastModified = $("meta[http-equiv='last-modified']").attr("content");
			var savedModified = this.config("savedModified");
			if (typeof lastModified != undefined && lastModified !== savedModified) {
//				this.config("savedModified", lastModified);
//				this.store('config').clear("savedModified");
			} 

			$.app.model.PoemBackup.load(poems);
		});

		this.helpers({
			renderPoem: function(id) {
				var el = this.$element();
				var poem = this.poem(id);

				this.title(poem.attr("name"));

				if (this.config('display') === 'all') {
					$("article", el).show();
				} else {
					$("article", el).hide();
					$("article#" + poem.id(), el).show();
				}
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
