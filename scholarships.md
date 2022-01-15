---
sitemap: false
---
<h1 class="category-title" id="scholarships">Scholarships</h1>
{% for s in site.data.scholarships %}

<article class="post-item">
    <div class="two-block-row-container with-date">
        <div class="article-title"><strong>{{ s.title }}</strong></div>
        <span class="post-meta date-label">{{ s.year }}</span>
    </div>
    <div class="post-meta" style="display: block">{{ s.where }}</div>
    {{ s.desc }}
</article>

{% endfor %}