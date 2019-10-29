$(function() {
	$.app = $.app || {};
	$.app.model = $.app.model || {};

	$.app.model.Word = Model('word', function(klass, proto) {
		this.persistence(Model.localStorage);

		this.use($.app.behavior.Associated, klass, proto, {
			hasMany: [
				{ name: 'usages', model: 'Usage', foreignKey: 'word_id' }
			],
			hasAndBelongsToMany: [
				{ name: 'poems', model: 'Poem', through: 'Usage', foreignKey: 'word_id', associationForeignKey: 'poem_id' }
			]
		});
	});
});
