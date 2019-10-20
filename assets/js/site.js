---
layout: nil
---
{% include js/app/data/poems.js %}
{% include js/app/search.js %}
$.app = $.app || { behavior: {}, model: {} };
{% include js/app/model/behavior/paginated.js %}
{% include js/app/model/poem.js %}
{% include js/app/controller/container.js %}
