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
    </main>
  `;
    this.header.init();
  }

  public mount(element: HTMLElement, data: DataHook): void {
    const container = this.container.querySelector(data) as HTMLElement;
    container?.appendChild(element);
  }

  public destroy(): void {
    this.header.destroy();
  }
}
