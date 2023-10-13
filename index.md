---
layout: default
title: Home
---
<div class="section-container">
  <section class="container__col-sm-12 container__col-md-12 container__col-lg-6 intro">
    <div class="container">
  {% capture md_include %}{% include intro.md %}{% endcapture %}
  {{ md_include | markdownify }}
    </div>
  </section>

  <section class="container__col-sm-12 container__col-md-12 container__col-lg-6">
    <div class="container">
  {% capture md_include %}{% include work.md %}{% endcapture %}
  {{ md_include | markdownify }}
    </div>
  </section>

  <section class="container__col-sm-12 container__col-md-12 container__col-lg-6">
    <div class="container">
  {% capture md_include %}{% include education.md %}{% endcapture %}
  {{ md_include | markdownify }}
    </div>
  </section>

  <section class="container__col-sm-12 container__col-md-12 container__col-lg-6">
    <div class="container">
  {% capture md_include %}{% include publications.md %}{% endcapture %}
  {{ md_include | markdownify }}
    </div>
  </section>

  <section class="container__col-sm-12 container__col-md-12 container__col-lg-6">
    <div class="container">
  {% capture md_include %}{% include research_appointments.md %}{% endcapture %}
  {{ md_include | markdownify }}
    </div>
  </section>

  <section class="container__col-sm-12 container__col-md-12 container__col-lg-6">
    <div class="container">
  {% capture md_include %}{% include teaching.md %}{% endcapture %}
  {{ md_include | markdownify }}
    </div>
  </section>

  <section class="container__col-sm-12 container__col-md-12 container__col-lg-6">
    <div class="container">
  {% capture md_include %}{% include awards.md %}{% endcapture %}
  {{ md_include | markdownify }}
    </div>
  </section>

  <section class="container__col-sm-12 container__col-md-12 container__col-lg-6">
    <div class="container">
  {% capture md_include %}{% include presentations.md %}{% endcapture %}
  {{ md_include | markdownify }}
    </div>
  </section>

  <section class="container__col-sm-12 container__col-md-12 container__col-lg-6">
    <div class="container contacts">
  {% capture md_include %}{% include contacts.md %}{% endcapture %}
  {{ md_include | markdownify }}
    </div>
  </section>
</div>
