---
	layout: nil
---

var poemsFull = {{ site.tags.poem | jsonify }};


{% assign poemIds = '' | split: '' %}
{% assign poemNames = '' | split: '' %}
{% assign poemBodies = '' | split: '' %}

{% for post in site.tags.poem %}
	{% assign poemIds = poemIds | push: post.slug %}
	{% assign poemNames = poemNames | push: post.title %}
	{% assign poemBodies = poemBodies | push: post.content %}
{% endfor %}



var poemsIds = {{ poemIds | jsonify }};





var poemsNames = {{ poemNames | jsonify }};





var poemsBodies = {{ poemBodies | jsonify }};
