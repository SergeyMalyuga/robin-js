import type {DataHook} from '../types/DataHook.type.ts';
import type {MainProps} from '../models/MainProps.ts';
import type {Header} from '../components/header/Header.ts';
import type {Hero} from '../components/hero/Hero.ts';
import type {Experience} from '../components/experience/Experience.ts';
import type {Values} from '../components/values/Values.ts';
import type {SkillSet} from '../components/skillset/SkillSet.ts';
import type {Projects} from '../components/projects/Projects.ts';
import type {Instagram} from '../components/instagram/Instagram.ts';
import type {Dribbble} from '../components/dribbble/Dribbble.ts';
import type {Response} from '../components/response/Response.ts';
import type {Gallery} from '../components/gallery/Gallery.ts';
import {Hooks} from '../constants/consts.ts';
import type {Contact} from '../components/contact/Contact.ts';

export class MainPage {
  private container: HTMLElement;
  private header: Header;
  private hero: Hero;
  private experience: Experience;
  private values: Values;
  private skillSet: SkillSet;
  private projects: Projects;
  private instagram: Instagram;
  private dribbble: Dribbble;
  private response: Response;
  private gallery: Gallery;
  private contact: Contact;

  public constructor(container: HTMLElement, props: MainProps) {
    this.container = container;
    this.header = props.header;
    this.hero = props.hero;
    this.experience = props.experience;
    this.values = props.values;
    this.skillSet = props.skillSet;
    this.projects = props.projects;
    this.instagram = props.instagram;
    this.dribbble = props.dribbble;
    this.response = props.response;
    this.gallery = props.gallery;
    this.contact = props.contact;
  }

  public render(): void {
    this.container.innerHTML = `
    ${this.header.render()}
    <main>
      ${this.hero.render()}
      ${this.experience.render()}
      ${this.values.render()}
      ${this.skillSet.render()}
      ${this.projects.render()}
      ${this.instagram.render()}
      ${this.dribbble.render()}
      ${this.response.render()}
      <div data-hook="gallery"></div>
      <div data-hook="contact"></div>
    </main>
  `;
    this.mount(this.gallery.render(), Hooks.GALLERY);
    this.mount(this.contact.render(), Hooks.CONTACT);
    this.header.init();
    this.gallery.init();
    this.contact.init();
  }

  public mount(element: HTMLElement, data: DataHook): void {
    const container = this.container.querySelector(data) as HTMLElement;
    container?.appendChild(element);
  }

  public destroy(): void {
    this.header.destroy();
    this.gallery.destroy();
    this.contact.destroy();
  }
}
