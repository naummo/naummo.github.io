---
sitemap: false
---
<h1 class="category-title" id="teaching">Teaching</h1>
{% for t in site.data.teaching %}

<article class="post-item">
    <div class="two-block-row-container with-date">
        <div class="article-title"><strong>{{ t.title }}</strong></div>
        <span class="post-meta date-label">{{ t.year }}</span>
    </div>
    <div class="post-meta" style="display: block">{{ t.desc }}</div>
</article>

{% endfor %}