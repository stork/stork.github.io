var poems = [{% for post in site.tags.poem %}{id:'{{ post.slug }}',name:'{{ post.title }}'}{% if forloop.last %}];{% else %},{% endif %}{% endfor %}
$(function() { 
	$('#search-poems').typeahead({
		source: poems,
		items: 12,
		itemSelected: function(item, val, text) {
			window.location.hash = val;
		}
	});
})
