$(function() {
	$.app = $.app || {};
	$.app.model = $.app.model || {};

	$.app.model.Poem = Model('poem', function(klass, proto) {
		this.persistence(Model.localStorage);

		this.use($.app.behavior.Associated, klass, proto, {
			hasMany: [
				{ name: 'usages', model: 'Usage', foreignKey: 'poem_id' }
			],
			hasAndBelongsToMany: [
				{ name: 'words', model: 'Word', through: 'Usage', foreignKey: 'poem_id', associationForeignKey: 'word_id' }
			]
		});
	});
});
