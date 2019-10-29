$(function() {
	$.app = $.app || {};
	$.app.behavior = $.app.behavior || {};

	$.app.behavior.Associated = function(context, klass, proto, associations) {
		$.each(associations, function(type, bindings) {
			$.each(bindings, function(index, binding) {
				switch (type) {
					case 'belongsTo':
						proto[binding.name] = function() {
							var foreignKey = this.attr(binding.foreignKey);
							return $.app.model[binding.model].detect(function() {
								return this.id() == foreignKey;
							})
						};
						break;
					case 'hasOne':
						proto[binding.name] = function() {
							var id = this.id();
							return $.app.model[binding.model].detect(function() {
								return this.attr(binding.foreignKey) == id;
							});
						};
						break;
					case 'hasMany':
						proto[binding.name] = function() {
							var id = this.id();
							return $.app.model[binding.model].select(function() {
								return this.attr(binding.foreignKey) == id;
							});
						};
						break;
					case 'hasAndBelongsToMany':
						proto[binding.name] = function() {
							var id = this.id();
//TODO select through/IN()
						};
						break;
					default:
						break;
				}
			});
		});

	};

});
