{% assign words = "" | split:" " %}
{% for post in site.tags.poem %}
	{% assign postwords = post.content | split:' ' %}
	{% for word in postwords %}
		{% assign word = word | remove: '.' | remove: ',' | remove: '"' | remove: '(' | remove: ')' | remove: ';' | remove: '-' | remove: '!' | remove: '?' %}
		{% assign words = words | push: word %}
	{% endfor %}
{% endfor %}
{% assign words = words | uniq | sort %}
var words = {{ words | jsonify }};
