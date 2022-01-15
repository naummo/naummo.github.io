<h1 class="category-title" id="education">Education</h1>
{% for ed in site.data.education %}

<article class="post-item">
    <div class="two-block-row-container with-date">
        <div class="article-title"><strong>{{ ed.title }}</strong> in {{ ed.topic }}</div>
        <span class="post-meta date-label">{{ ed.year }}</span>
    </div>
    {% if ed.subtopic != nil %}
        <div class="post-meta" style="display: block"><code class="highlighter-rouge" style="padding: 0"><strong>({{ ed.subtopic }})</strong></code></div>
    {% endif %}
    <div class="post-meta" style="display: block">{{ ed.university | markdownify | remove: '<p>' | remove: '</p>' }}</div>
</article>

{% endfor %}