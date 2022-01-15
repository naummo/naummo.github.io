---
sitemap: false
---
<h1 class="category-title" id="publications">Publications</h1>
{% for p in site.data.publications %}

<article class="post-item">
    <div style="display: inline-block; position: relative">
        <span class="article-title"><strong>{{ p.title }}</strong></span>
    </div>    
    <div class="two-block-row-container">
        <div class="post-meta">{{ p.authors }}</div>
        {% if p.pdf != nil %}
            <div class="button-container">
                <a href="{{ site.baseurl }}{{ p.pdf }}">
                    <div class="button">
                        PDF
                    </div>
                </a>
            </div>
        {% endif %}
    </div>
    <div class="post-meta"><em>{{ p.journal }}, {{ p.year }}</em></div>
    <!-- {% if forloop.last != true %}
        <hr>
    {% endif %} -->
</article>

{% endfor %}