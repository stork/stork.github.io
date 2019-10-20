{% assign words = '' | split: ' ' %}
{% for post in site.tags.poem %}
	{% assign postwords = post.content | split: ' ' %}
	{% for word in postwords %}
		{% assign word = word | remove: '.' %}
		{% assign word = word | remove: ',' %}
		{% assign word = word | remove: '"' %}
		{% assign word = word | remove: '(' %}
		{% assign word = word | remove: ')' %}
		{% assign word = word | remove: ';' %}
		{% assign word = word | remove: '-' %}
		{% assign word = word | remove: '!' %}
		{% assign word = word | remove: '?' %}
		{% assign word = word | downcase %}
		{% assign words = words | push: word %}
	{% endfor %}
{% endfor %}
{% assign words = words | uniq %}
{% assign words = words | sort %}
var words = {{ words | jsonify }};
