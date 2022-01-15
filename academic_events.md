---
sitemap: false
---
<h1 class="category-title" id="academic_events">Academic Events</h1>
{% for a in site.data.academic_events %}

<article class="post-item">
    <div class="two-block-row-container with-date">
        <div class="article-title"><strong>{{ a.title }}</strong></div>
        <span class="post-meta date-label">{{ a.year }}</span>
    </div>
    <div class="post-meta" style="display: block">{{ a.where }}</div>
    {{ a.desc }}
</article>

{% endfor %}