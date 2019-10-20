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
				var all = $('.pagination-switch a[rel="all"]');
				var one = $('.pagination-switch a[rel="one"]');

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

				all.hide();
				all.attr("href", "#/all/" + poem.id());
				one.hide();
				one.attr("href", "#/one/" + poem.id());
				if (this.store('config').get('display') === 'all') {
					one.show();
				} else {
					all.show();
				}
			},
			displayCommand: function(command, id) {
				if (command === 'all' || command === 'one') {
					this.store('config').set('display', command);
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
this.log("PAG:")
console.dir(this.store('config').keys());
		});
	}).run();
});
