var poems = [{% for post in site.tags.poem %}{id:'{{ post.slug }}',name:'{{ post.title }}'}{% unless forloop.last %},{% endunless %}{% endfor %}];
