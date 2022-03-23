---
	layout: nil
---
var poems = [{% for post in site.tags.poem %}{id:'{{ post.slug }}',name:'{{ post.title }}',archived:{% if post.archived %}'{{ post.archived }}'{% else %}false{% endif %},published:{% if post.published %}'{{ post.published }}'{% else %}false{% endif %}}{% unless forloop.last %},{% endunless %}{% endfor %}];
