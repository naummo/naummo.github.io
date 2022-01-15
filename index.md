---
layout: default
title: Home
---
<div class="section-container">
  <section class="container__col-sm-12 container__col-md-12 container__col-lg-6 intro">
    <div class="container">
  {% capture md_include %}{% include_relative intro.md %}{% endcapture %}
  {{ md_include | markdownify }}
    </div>
  </section>

  <section class="container__col-sm-12 container__col-md-12 container__col-lg-6">
    <div class="container">
  {% capture md_include %}{% include_relative education.md %}{% endcapture %}
  {{ md_include | markdownify }}
    </div>
  </section>

  <section class="container__col-sm-12 container__col-md-12 container__col-lg-6">
    <div class="container">
  {% capture md_include %}{% include_relative research_appointments.md %}{% endcapture %}
  {{ md_include | markdownify }}
    </div>
  </section>

  <section class="container__col-sm-12 container__col-md-12 container__col-lg-6">
    <div class="container">
  {% capture md_include %}{% include_relative publications.md %}{% endcapture %}
  {{ md_include | markdownify }}
    </div>
  </section>

  <section class="container__col-sm-12 container__col-md-12 container__col-lg-6">
    <div class="container">
  {% capture md_include %}{% include_relative awards.md %}{% endcapture %}
  {{ md_include | markdownify }}
    </div>
  </section>

  <section class="container__col-sm-12 container__col-md-12 container__col-lg-6">
    <div class="container">
  {% capture md_include %}{% include_relative work.md %}{% endcapture %}
  {{ md_include | markdownify }}
    </div>
  </section>

  <section class="container__col-sm-12 container__col-md-12 container__col-lg-6">
    <div class="container">
  {% capture md_include %}{% include_relative teaching.md %}{% endcapture %}
  {{ md_include | markdownify }}
    </div>
  </section>

  <section class="container__col-sm-12 container__col-md-12 container__col-lg-6">
    <div class="container">
  {% capture md_include %}{% include_relative presentations.md %}{% endcapture %}
  {{ md_include | markdownify }}
    </div>
  </section>

  <section class="container__col-sm-12 container__col-md-12 container__col-lg-6">
    <div class="container contacts">
  {% capture md_include %}{% include_relative contacts.md %}{% endcapture %}
  {{ md_include | markdownify }}
    </div>
  </section>
</div>