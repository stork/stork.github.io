var poems = [{% for post in site.tags.poem %}{id:'{{ post.slug }}',name:'{{ post.title }}',content:'{{ post.content | uri_escape }}'}{% unless forloop.last %},{% endunless %}{% endfor %}];
