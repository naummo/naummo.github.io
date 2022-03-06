<h1 class="category-title" id="publications">Publications</h1>
{% for p in site.data.publications %}

<article class="post-item">
    <div style="display: inline-block; position: relative">
        <span class="article-title"><strong>{{ p.title }}</strong></span>
    </div>    
    <div class="two-block-row-container">
        <div class="post-meta">{{ p.authors }}</div>
        {% if p.pdf != nil or p.git != nil %}
            <div class="button-container">
                {% if p.pdf != nil %}
                    <a href="{{ site.baseurl }}{{ p.pdf }}">
                        <div class="button" style="display: inline-block">
                            PDF
                        </div>
                    </a>
                {% endif %}
                {% if p.git != nil %}
                    <a href="{{ p.git }}">
                        <div class="button" style="display: inline-block">
                            artifact
                        </div>
                    </a>
                {% endif %}
            </div>
        {% endif %}
    </div>
    <div class="post-meta"><em>{{ p.journal }}, {{ p.year }}</em></div>
    <!-- {% if forloop.last != true %}
        <hr>
    {% endif %} -->
</article>

{% endfor %}