$(function() {
	$.sammy('#pagination', 'Common', function() {

		this.bind("run", function() {
//TODO get settings for adjusting rendering all/one
			this.$element().show();
			$(".pagination-switch").show();
		});

		this.helpers({
			paginate: function(id) {
				var poem = this.poem(id);
				var prev = $('a[rel="prev"]', this.$element());
				var next = $('a[rel="next"]', this.$element());

				$('.pagination-switch a[rel="all"]').attr("href", "#/all/" + poem.id());
				$('.pagination-switch a[rel="one"]').attr("href", "#/one/" + poem.id());

				prev.show();
				next.show();

				if (poem.isFirst()) {
					prev.hide();
					next.attr("href", "#" + poem.next().id());
				} else if (poem.isLast()) {
					next.hide();
					prev.attr("href", "#" + poem.prev().id());
				} else {
					prev.attr("href", "#" + poem.prev().id());
					next.attr("href", "#" + poem.next().id());
				}
			},
			displayCommand: function(command, id) {
				// command == all/one
//TODO save settings
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
