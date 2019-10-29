(function (factory) {
	if (typeof define === 'function' && define.amd) {
		define(['jquery', 'sammy'], factory);
	} else {
		(window.Sammy = window.Sammy || {}).Common = factory(window.jQuery, window.Sammy);
	}
}(function ($, Sammy) {
	Sammy.Common = function() {
		this.debug = true;
		this.disable_push_state = true;

		this.notFound = function() {};

		this.use('Storage');
		this.store('config', {element: 'body', type: 'local'});

		this.helpers({
			poem: function(id) {
				if (typeof id == 'undefined' || !$.app.model.PoemBackup.exists(id)) {
					return $.app.model.PoemBackup.first();
				}
				return $.app.model.PoemBackup.find(id);
			}
		});
	};

	return Sammy.Common;
}));
