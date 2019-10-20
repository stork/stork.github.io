$(function() {
	$.sammy('#container', 'Common', function() {

		this.bind("run", function() {
			$.app.model.Poem.load(poems);
		});

		this.helpers({
			renderPoem: function(id) {
				var el = this.$element();
				$("article", el).hide();

				if (typeof id == 'undefined' || !$.app.model.Poem.exists(id)) {
					$("div.well", el).show();
					id = this.poem().id();
//TODO set location
				} else {
					$("div.well", el).hide();
				}

				$("article#" + id, el).show();

//TODO set title
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
