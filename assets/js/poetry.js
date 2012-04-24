---
layout: nil
---
var poems = [
{% for post in site.tags.poem %}
	{id: '{{ post.slug }}', name: '{{ post.title }}'}{% if forloop.rindex %},{% endif %}
{% endfor %}
];
