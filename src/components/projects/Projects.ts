import styles from './Projects.module.scss'

export class Projects {
  public render() {
    return `
<section class="${styles.projects}">
    <div class="${styles.content} container">
    <header class="${styles.projectsHeader}">
    <h2 class="section-title--small">My projects</h2>
    <p class="section-subtitle">Work that I’ve done for the past 8 years</p>
</header>

<article class="${styles.card}">
<a class="${styles.link}" href="#">
<img src="/images/raster/restaraunt.jpg" width="636" height="620" alt="Coin view" loading="lazy"/>
<h3 class="card-title">Restaurant Website Design</h3>
<p class="${styles.text}">I worked with the guys at CBRE to redesign their entire website and mobile app fro both Android and iOS.
This project lasted for 4 months and was a very challenging one.</p>
</a>
</article>

<article class="${styles.card}">
<a class="${styles.link}" href="#">
<img src="/images/raster/coin-view.jpg" width="636" height="620" alt="Coin view" loading="lazy"/>
<h3 class="card-title">Restaurant Website Design</h3>
<p class="${styles.text}">I worked with the guys at CBRE to redesign their entire website and mobile app fro both Android and iOS.
This project lasted for 4 months and was a very challenging one.</p>
</a>
</article>

<article class="${styles.card}">
<a class="${styles.link}" href="#">
<img src="/images/raster/hey-balazs.jpg" width="636" height="620" alt="Coin view" loading="lazy"/>
<h3 class="card-title">Restaurant Website Design</h3>
<p class="${styles.text}">I worked with the guys at CBRE to redesign their entire website and mobile app fro both Android and iOS.
This project lasted for 4 months and was a very challenging one.</p>
</a>
</article>

<article class="${styles.card}">
<a class="${styles.link}" href="#">
<img src="/images/raster/t-messenger.jpg" width="636" height="620" alt="Coin view" loading="lazy"/>
<h3 class="card-title">Restaurant Website Design</h3>
<p class="${styles.text}">I worked with the guys at CBRE to redesign their entire website and mobile app fro both Android and iOS.
This project lasted for 4 months and was a very challenging one.</p>
</a>
</article>

<button class="${styles.button}" type="button">View all projects</button>

</div>
</section>
    `
  }
}
