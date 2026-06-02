import styles from './Response.module.scss'

export class Response {
  public render() {
    return `
    <section id="response" class="section">
    <div class="${styles.content} container">
<div>
<h2 class="section-title--big">This is what people say about me</h2>
<p class="${styles.text}">Here are a few lines from people who I have worked with over the past
8+ years in my design career.</p>
<a href="#" class="${styles.link} link">See all testimonials</a>
</div>
<ul class="${styles.list}">
<li>
<article class="${styles.card}">
<picture>
<source srcset="/images/raster/response-richard-owens-mini.jpg" media="(max-width: 768px)"/>
<img class="${styles.image}" src="/images/raster/response-richard-owens.jpg" width="636" height="360" alt="" loading="lazy"/>
</picture>
<blockquote class="${styles.quote}">
<p>Robin is one of the best designers I have worked with in my entire life. He is a
designer who is very capable of taking up complex projects and delivers impeccable design.</p>
<footer class="${styles.footer}">
<cite>Vincent Rudd</cite>
<span>CEO, Company 1</span>
</footer>
</blockquote>
</article>
</li>

<li>
<article class="${styles.card}">
<picture>
<source srcset="/images/raster/response-emily-parker-mini.jpg" media="(max-width: 768px)"/>
<img class="${styles.image}" src="/images/raster/response-emily-parker.jpg" width="636" height="360" alt="" loading="lazy"/>
</picture>
<blockquote class="${styles.quote}">
<p>I think Robin has an incredible gift. It has been an absolute pleasure to work with
a designer of this caliber.</p>
<footer class="${styles.footer}">
<cite>Emily Parker</cite>
<span>CEO, Company 2</span>
</footer>
</blockquote>
</article>
</li>

<li>
<article class="${styles.card}">
<picture>
<source srcset="/images/raster/response-vincent-rudd-mini.jpg" media="(max-width: 768px)"/>
<img class="${styles.image}" src="/images/raster/response-vincent-rudd.jpg" width="636" height="360" alt="" loading="lazy"/>
</picture>
<blockquote class="${styles.quote}">
<p>All I can say that, Robin is a phenomenal designer. The wavelength at which he thinks is astounding.
I love the focus, passion and attention to detail in the design.</p>
<footer class="${styles.footer}">
<cite>Vincent  Rudd</cite>
<span>CEO, Company 3</span>
</footer>
</blockquote>
</article>
</li>
</ul>
</div>
</section>
    `
  }
}
