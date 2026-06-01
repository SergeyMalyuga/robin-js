import './styles.scss';
import {MainPage} from './pages/MainPage.ts';
import {Header} from './components/header/Header.ts';
import {Hero} from './components/hero/Hero.ts';
import {Experience} from './components/experience/Experience.ts';
import {Values} from './components/values/Values.ts';
import {SkillSet} from './components/skillset/SkillSet.ts';
import {Projects} from './components/projects/Projects.ts';

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('app') as HTMLElement;
  const header = new Header();
  const hero = new Hero();
  const experience = new Experience();
  const values = new Values();
  const skillSet = new SkillSet();
  const projects = new Projects();

  const mainPage = new MainPage(container, {header, hero, experience, values, skillSet, projects});
  mainPage.render();

  window.addEventListener('beforeunload', () => {
    mainPage.destroy();
  })
});
