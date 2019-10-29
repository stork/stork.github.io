---
	layout: nil
---
{% assign poemIds = '' | split: '' %}
{% assign poemNames = '' | split: '' %}
{% assign poemBodies = '' | split: '' %}
{% for post in site.tags.poem %}
	{% assign poemIds = poemIds | push: post.slug %}
	{% assign poemNames = poemNames | push: post.title %}
	{% assign poemBodies = poemBodies | push: post.content %}
{% endfor %}

var poemsData = {ids:{{ poemIds | jsonify }},names:{{ poemNames | jsonify }},bodies:{{ poemBodies | jsonify }}};
