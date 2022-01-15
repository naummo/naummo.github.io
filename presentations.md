---
sitemap: false
---
<h1 class="category-title" id="presentations">Presentations</h1>
{% for p in site.data.presentations %}

<article class="post-item">
    <div class="two-block-row-container with-date">
        <!-- <span class="article-title"><code class="post-meta"><strong>{{ p.type }}</strong></code> <strong>{{ p.title }}</strong></span> -->
        <span class="article-title"><strong>{% if p.link != nil %}<a href="{{ p.link }}">{{ p.type }}</a>{% else %}{{ p.type }}{% endif %},</strong> {{ p.desc }}</span>
        <span class="post-meta date-label">{{ p.year }}</span>
    </div>
    <!-- <div class="post-meta" style="width: 85%"><p>{{ p.desc }}</p></div>
    <div class="two-block-row-container">
        <div class="post-meta">{{ p.desc }}</div>
        {% if p.link != nil %}
            <div class="button-container">
                {% if p.external_link == true %}
                    <a href="{{ p.link }}">
                {% else %}
                    <a href="{{ site.url }}{{ p.link }}">
                {% endif %}
                    <div class="button">
                        {{ p.link_text }}
                    </div>
                </a>
            </div>
        {% endif %}
    </div> -->
</article>

{% endfor %}