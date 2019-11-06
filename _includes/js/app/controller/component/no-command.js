(function (factory) {
	if (typeof define === 'function' && define.amd) {
		define(['jquery', 'sammy'], factory);
	} else {
		(window.Sammy = window.Sammy || {}).NoCommand = factory(window.jQuery, window.Sammy);
	}
}(function ($, Sammy) {
	Sammy.NoCommand = function() {
		this.get('#/:command', function() {});
		this.get('#/:command/:id', function() {});
	};

	return Sammy.NoCommand;
}));
