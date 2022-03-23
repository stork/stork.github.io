---
	layout: nil
---
var poems = [{% for post in site.tags.poem %}{id:'{{ post.slug }}',name:'{{ post.title }}',archived:'{{ post.archived }}',published:'{{ post.published }}'}{% unless forloop.last %},{% endunless %}{% endfor %}];
