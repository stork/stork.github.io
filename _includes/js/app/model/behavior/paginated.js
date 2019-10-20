$(function() {
	$.app = $.app || {};
	$.app.behavior = $.app.behavior || {};

	$.app.behavior.Paginated = function(context, klass, proto) {

		klass.exists = function(id) {
			if (typeof id == 'undefined'
				|| typeof id == 'string' && id.length == 0
				|| typeof id == 'number' && id <= 0
			) {
				return false;
			}

			var model = klass.find(id);
			return (typeof model != 'undefined');
		};

		proto.isFirst = function() {
			var records = klass.all();
			var index = $.inArray(this, records);
			return (index === 0);
		};

		proto.isLast = function() {
			var records = klass.all();
			var index = $.inArray(this, records);
			return (++index >= records.length);
		};

		proto.prev = function() {
			var records = klass.all();
			var index = $.inArray(this, records);

			if (--index >= 0) {
				return records[index];
			}
		};

		proto.next = function() {
			var records = klass.all();
			var index = $.inArray(this, records);

			if (++index < records.length) {
				return records[index];
			}
		};
	};
});
