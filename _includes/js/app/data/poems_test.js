var poems_test = [{% for post in site.tags.poem %}{id:'{{ post.slug }}',name:'{{ post.title }}',body:'{{ post.content }}'}{% unless forloop.last %},{% endunless %}{% endfor %}];

