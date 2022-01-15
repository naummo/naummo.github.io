<h1 class="category-title" id="awards">Awards</h1>
{% for a in site.data.awards %}

<article class="post-item">
    <div class="two-block-row-container with-date">
        <div class="article-title"><strong>{{ a.title }}</strong></div>
        <span class="post-meta date-label">{{ a.year }}</span>
    </div>
    <div class="post-meta" style="display: block">{{ a.where }}</div>
</article>

{% endfor %}