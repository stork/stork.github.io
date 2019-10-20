{% assign words = '' | split: ' ' %}
{% for post in site.tags.poem %}
	{% assign postwords = post.content | split: ' ' %}
	{% for word in postwords %}
		{% assign tmp = word | remove: '.' %}
		{% assign tmp = tmp | remove: ',' %}
		{% assign tmp = tmp | remove: '"' %}
		{% assign tmp = tmp | remove: '(' %}
		{% assign tmp = tmp | remove: ')' %}
		{% assign tmp = tmp | remove: ';' %}
		{% assign tmp = tmp | remove: '-' %}
		{% assign tmp = tmp | remove: '!' %}
		{% assign tmp = tmp | remove: '?' %}
		{% assign tmp = tmp | downcase %}
		{% assign words = words | push: tmp %}
	{% endfor %}
{% endfor %}
{% assign words = words | uniq %}
{% assign words = words | sort %}
var words = {{ words | jsonify }};
