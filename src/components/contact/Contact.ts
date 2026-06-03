import styles from './Contact.module.scss'

export class Contact {
  private contactForm: HTMLFormElement | null = null;

  public render() {
    const section = document.createElement('section');
    section.className = 'section'
    section.id = 'contact';
    section.innerHTML = `
          <div class="${styles.content} container">
  <div>
  <h2 class="section-title section-title--big">Let’s get started</h2>
  <p>Now that you know a lot about me, let me know if you are interested to work with me.</p>
  </div>
  <form class="${styles.contactForm}">
  <div class="${styles.inputWrapper}">
  <label for="name" class="${styles.label}">Name</label>
  <input id="name" class="${styles.input}" type="text" required>
  </div>
  <div class="${styles.inputWrapper}">
  <label for="email" class="${styles.label}">Email</label>
  <input id="email" class="${styles.input}" type="email" required>
  </div>
  <div class="${styles.inputWrapper}">
  <label for="message" class="${styles.label}">Message</label>
  <textarea id="message" class="${styles.message}"></textarea>
  </div>
  <button type="submit" class="${styles.button}">Send message</button>
  </form>
  </div>
      `

    this.contactForm = section.querySelector(`.${styles.contactForm}`);
    return section;
  }

  public init(): void {
    if (this.contactForm) {
      this.contactForm.addEventListener('submit', this.onSubmit);
    }
  }

  private onSubmit = (evt: SubmitEvent) => {
    evt.preventDefault();
    console.log('Submitted');
    if (this.contactForm) {
      this.contactForm.reset();
    }
  }

  public destroy(): void {
    this.contactForm?.removeEventListener('submit', this.onSubmit);
  }
}
