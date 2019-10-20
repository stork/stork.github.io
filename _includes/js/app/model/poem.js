$(function() {
	$.app = $.app || {};
	$.app.model = $.app.model || {};

	$.app.model.Poem = Model('poem', function(klass, proto) {
		this.constructor.unique_key = "id";
		this.use($.app.behavior.Paginated, klass, proto);

		this.extend({
			load: function(data) {
				for (var i = 0, length = data.length; i < length; i++) {
					$.app.model.Poem.add(new $.app.model.Poem(data[i]));
				}
			}
		});
	});
});
