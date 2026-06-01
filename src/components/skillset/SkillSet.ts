import styles from './SkillSet.module.scss'

export class SkillSet {
  public render() {
    return `
<section>
    <div class="${styles.content} container">
    <div class="${styles.wrapperContent}">
        <div>
    <h2 class="section-title section-title--big">Skillset</h2>
    <p class="${styles.text}">
    With skills in over 4 different fields of design, I am the perfect
    person to hire when it comes to a full-fledged project. Whatever your
    needs are, I can pretty much take on any challenge.</p>
</div>
    <ul class="${styles.listSkills}">
<li>
<img class="${styles.image}" src="/images/vector/product-icon.svg" width="32" height="32" loading="lazy" alt=""/>
<h3 class="card-title">Product Design</h3>
<p class="${styles.text}">Working at Facebook has taught me a lot about how to understand users,
solve problems and build great products.</p>
</li>
<li>
<img class="${styles.image}" src="/images/vector/design-icon.svg" width="32" height="32" loading="lazy" alt=""/>
<h3 class="card-title">Visual Design</h3>
<p class="${styles.text}">My experience at dribble has helped me learn to develop the eye for design.
Colors, typography, layout and the whole package.</p>
</li>
<li>
<img class="${styles.image}" src="/images/vector/motion-icon.svg" width="32" height="32" loading="lazy" alt=""/>
<h3 class="card-title">Motion Design</h3>
<p class="${styles.text}">I started my design journey with motion design in my college days.
Motion is something that really fascinates me because of the flexibility
of story telling.</p>
</li>
<li>
<img class="${styles.image}" src="/images/vector/photography-icon.svg" width="32" height="32" loading="lazy" alt=""/>
<h3 class=card-title>Photography</h3>
<p class="${styles.text}">Clicking pictures really brings out the creative in me.
Photography really makes you look and perceive things in a different way.</p>
</li>
</ul>
</div>
<ul class="${styles.listWorks}">
<li><img src="/images/vector/skill-icon-1.svg" width="85" height="30"/></li>
<li><img src="/images/vector/skill-icon-2.svg" width="85" height="30"/></li>
<li><img src="/images/vector/skill-icon-3.svg" width="85" height="30"/></li>
<li><img src="/images/vector/skill-icon-4.svg" width="85" height="30"/></li>
<li><img src="/images/vector/skill-icon-5.svg" width="154" height="25"/></li>
<li><img src="/images/vector/skill-icon-6.svg" width="42" height="21"/></li>
</ul>
</div>
</section>
`
  }
}
