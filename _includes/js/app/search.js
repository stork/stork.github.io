---
	layout: nil
---
$(function() {
	$('#search-poems').typeahead({
		source: poems,
		items: 16,
		itemSelected: function(item, val, text) {
			_gaq.push(['_trackEvent', 'Poetry', 'Search', text]);
			window.location.hash = val;
		}
	});
})
