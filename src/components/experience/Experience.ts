import styles from './Experience.module.scss';

export class Experience {
  public render() {
    return `
<section class="${styles.experience}">
<div class="container">
     <h2 class="section-title section-title--small ${styles.titleMain}">work experience</h2>
   <p class="section-subtitle ${styles.subtitle}">Companies I have worked for in the past</p>
<ol class="${styles.experienceList}">
<li class="${styles.item}">
<h3 class="${styles.titleItem}"><span class="${styles.accentGreen}">Google</span>, Interaction Designer</h3>
<p class="${styles.text}">I currently am the lead designer on the interaction design team for Google Play.</p>
</li>
<li class="${styles.item}">
<h3 class="${styles.titleItem}"><span class="${styles.accentBlue}">Facebook</span>, Product Designer</h3>
<p class="${styles.text}">I’ve worked on a wide variety of internal tools for facebook over the past 6 years.</p>
</li>
<li class="${styles.item}">
<h3 class="${styles.titleItem}"><span class="${styles.accentPink}">Dribbble</span>, Graphic Designer</h3>
<p class="${styles.text}">I started my design career with Dribbble. I was incharge of creating illustrations for the platform.</p>
</li>
</ol>
</div>
</section>
`
  }
}
