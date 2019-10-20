var poems_test = [{% for post in site.tags.poem %}{id:'{{ post.slug }}',name:'{{ post.title | uri_escape }}',body:'{{ post.content | uri_escape }}'}{% unless forloop.last %},{% endunless %}{% endfor %}];

