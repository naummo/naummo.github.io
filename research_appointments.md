---
sitemap: false
---
<h1 class="category-title" id="research_internships">Visits & Internships</h1>
{% for i in site.data.research_appointments %}

<article class="post-item">
    <div class="two-block-row-container with-date">
        <div style="margin-right: -1em;">
            <!-- <span class="company-logo">
                <img src="{{ i.icon }}">
            </span> -->
            <span class="article-title">{{ i.title | markdownify | remove: '<p>' | remove: '</p>' }} at</span>
            <span class="article-title"><strong>{{ i.company }}</strong></span>{% if i.where != nil %}, {{ i.where }}{% endif %}
        </div>
        <span class="post-meta date-label">{{ i.year }}</span>
    </div>
{% if i.host != nil %}
    <div class="post-meta">Hosted by {{ i.host | markdownify | remove: '<p>' | remove: '</p>' }}</div>
{% endif %}
</article>

{% endfor %}