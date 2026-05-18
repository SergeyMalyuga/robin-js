import styles from './Experience.module.scss';

export class Experience {
  public render() {
    return `
<section class="${styles.experience}">
<div class="container">
     <h2 class="section-title section-title--small">work experience</h2>
   <p class="section-subtitle ${styles.subtitle}">Companies I have worked for in the past</p>
</div>
</section>
`
  }
}
