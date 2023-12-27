<h1 class="category-title" id="work">Work Experience</h1>
{% for w in site.data.work %}

<article class="post-item">
    <div class="two-block-row-container with-date">
        <!-- <span class="company-logo">
            <img src="{{ i.icon }}">
        </span> -->
        <span class="article-title">{{ w.title }} at <span style="white-space:normal;"><strong>{{ w.company }}</strong>{% if w.where != nil %}, {{ w.where }}{% endif %}</span></span>
        <span class="post-meta date-label">{{ w.year }}</span>
    </div>
</article>

{% endfor %}