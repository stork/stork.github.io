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
		{% assign tmp = tmp | remove: '“' %}
		{% assign tmp = tmp | remove: "'" %}
		{% assign tmp = tmp | remove: '`' %}
		{% assign tmp = tmp | remove: '0' %}
		{% assign tmp = tmp | remove: '1' %}
		{% assign tmp = tmp | remove: '2' %}
		{% assign tmp = tmp | remove: '3' %}
		{% assign tmp = tmp | remove: '4' %}
		{% assign tmp = tmp | remove: '5' %}
		{% assign tmp = tmp | remove: '6' %}
		{% assign tmp = tmp | remove: '7' %}
		{% assign tmp = tmp | remove: '8' %}
		{% assign tmp = tmp | remove: '9' %}
		{% assign thesize = tmp | size %}
		{% if thesize > 0 %}
			{% assign tmp = tmp | downcase %}
			{% assign words = words | push: tmp %}
		{% endif %}
	{% endfor %}
{% endfor %}
{% assign words = words | uniq %}
{% assign words = words | sort %}
var words = {{ words | jsonify }};
