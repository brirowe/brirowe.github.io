---
title: "Education & Experience"
permalink: /education-experience/
layout: single
author_profile: true
---

# Education & Experience

A timeline of my academic background, research experience, applied clinical research roles, and technical training.

<div class="timeline-filters">
  <button onclick="filterTimeline('all')">All</button>
  <button onclick="filterTimeline('education')">Education</button>
  <button onclick="filterTimeline('experience')">Experience</button>
  <button onclick="filterTimeline('research')">Research</button>
  <button onclick="filterTimeline('awards')">Awards</button>
</div>

<div class="timeline-app">

  <div class="timeline-entry" data-category="education">
    <div class="timeline-year">Expected Aug 2026</div>
    <div class="timeline-card">
      <h2>B.S. Computer Science</h2>
      <h3>University of Colorado Boulder</h3>
      <p><strong>Post-Baccalaureate Program</strong></p>
      <p><strong>Relevant coursework:</strong> Data Science, Machine Learning, Introduction to Artificial Intelligence, Discrete Structures.</p>
    </div>
  </div>

  <div class="timeline-entry" data-category="experience research">
    <div class="timeline-year">Mar 2026–Present</div>
    <div class="timeline-card">
      <h2>Clinical Research Associate | Sports Medicine</h2>
      <h3>The Sports Center – CommonSpirit Sports Medicine</h3>
      <p>
        Collect, code, organize, and analyze research data across multiple projects. Collaborate with principal investigators on study design, protocol development, literature reviews, manuscripts, abstracts, posters, and presentations.
      </p>
    </div>
  </div>

  <div class="timeline-entry" data-category="experience research">
    <div class="timeline-year">Aug 2023–Jul 2026</div>
    <div class="timeline-card">
      <h2>Research Services Professional | Orthopedics</h2>
      <h3>University of Colorado Anschutz Medical Campus</h3>
      <p>
        Supported orthopedic research through data collection, study documentation, protocol development, idea generation, grant support, literature review, conference presentations, and student/fellow research mentorship.
      </p>
    </div>
  </div>

  <div class="timeline-entry" data-category="education research">
    <div class="timeline-year">May 2023</div>
    <div class="timeline-card">
      <h2>M.S. Applied Physiology</h2>
      <h3>University of Colorado Colorado Springs</h3>
      <p><strong>Thesis:</strong> <em>Muscle & Skin Temperatures Influence Post-Exercise Hypotension</em>.</p>
      <p><strong>Relevant coursework:</strong> Cardiovascular Physiology, Advanced Exercise Physiology, Research & Statistical Design, Sex Differences in Physiology.</p>
    </div>
  </div>

  <div class="timeline-entry" data-category="experience">
    <div class="timeline-year">Aug 2022–May 2023</div>
    <div class="timeline-card">
      <h2>Graduate Teaching Assistant | Human Physiology</h2>
      <h3>University of Colorado Colorado Springs</h3>
      <p>
        Taught undergraduate human physiology labs, supported lectures and demonstrations, helped develop curriculum, demonstrated physiological measurement techniques, and provided student feedback.
      </p>
    </div>
  </div>

  <div class="timeline-entry" data-category="awards">
    <div class="timeline-year">2023</div>
    <div class="timeline-card">
      <h2>Outstanding Graduate Award</h2>
      <h3>University of Colorado Colorado Springs</h3>
    </div>
  </div>

  <div class="timeline-entry" data-category="awards research">
    <div class="timeline-year">2021</div>
    <div class="timeline-card">
      <h2>Graduate Research Fellowship</h2>
      <h3>University of Colorado Colorado Springs</h3>
    </div>
  </div>

  <div class="timeline-entry" data-category="education">
    <div class="timeline-year">Aug 2020</div>
    <div class="timeline-card">
      <h2>B.S. Exercise Science</h2>
      <h3>North Greenville University</h3>
      <p>
        Undergraduate training in exercise science, physiology, and human performance.
      </p>
    </div>
  </div>

  <div class="timeline-entry" data-category="research">
    <div class="timeline-year">Undergraduate</div>
    <div class="timeline-card">
      <h2>Undergraduate Research Experience</h2>
      <h3>North Greenville University</h3>
      <p>
        Conducted primary human research investigating the effects of sex on lactate threshold during endurance running events.
      </p>
    </div>
  </div>

</div>

<script src="/assets/js/timeline.js"></script>

<style>
.timeline-filters {
  margin: 2rem 0;
}

.timeline-filters button {
  margin: 0.25rem;
  padding: 0.6rem 1rem;
  border-radius: 999px;
  border: 1px solid #666;
  cursor: pointer;
}

.timeline-app {
  position: relative;
  margin-top: 2rem;
}

.timeline-entry {
  display: grid;
  grid-template-columns: 150px 1fr;
  gap: 1.5rem;
  margin-bottom: 2rem;
  align-items: start;
}

.timeline-year {
  font-weight: bold;
  opacity: 0.85;
}

.timeline-card {
  padding: 1.25rem;
  border-radius: 1rem;
  border: 1px solid #444;
  background: rgba(255, 255, 255, 0.04);
}

.timeline-card h2 {
  margin-top: 0;
}

@media (max-width: 700px) {
  .timeline-entry {
    grid-template-columns: 1fr;
  }
}
</style>