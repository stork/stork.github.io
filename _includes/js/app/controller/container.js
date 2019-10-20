$(function() {
	$.sammy('#container', 'Common', function() {

		this.bind("run", function() {
			$.app.model.Poem.load(poems);
		});

		this.helpers({
			renderPoem: function(id) {
				$("article", this.$element()).hide();

				if (typeof id == 'undefined' || !$.app.model.Poem.exists(id)) {
					id = $.app.model.Poem.first().id();
					//TODO set location
				}

				$("article#" + id, this.$element()).show();

				//TODO set title
			}
		});

		this.get('/', function() {
			$("div.well", this.$element()).show();
			this.renderPoem();
		});

		this.get('#:id', function() {
			$("div.well", this.$element()).hide();
			this.renderPoem(this.params.id);
		});
	}).run();
});
