$(function() {
	$.app = $.app || {};
	$.app.model = $.app.model || {};

	$.app.model.Usage = Model('usage', function(klass, proto) {
		this.persistence(Model.localStorage);

		this.use($.app.behavior.Associated, klass, proto, {
			belongsTo: [
				{ name: 'poem', model: 'Poem', foreignKey: 'poem_id' },
				{ name: 'word', model: 'Word', foreignKey: 'word_id' }
			]
		});
	});
});
