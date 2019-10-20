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
	};

	return Sammy.Common;
}));
