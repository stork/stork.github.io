{% assign words = "" | split:" " %}
{% for post in site.tags.poem %}
	{% assign postwords = post.content | split:' ' %}
	{% for word in postwords %}
		{% assign words = words | push: word %}
	{% endfor %}
{% endfor %}
{% assign unique_words = words | uniq %}
var nonunique = {{ words | size }};
var unique = {{ unique_words | size }};
var words = {{ unique_words | jsonify }};
