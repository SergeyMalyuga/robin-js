import './styles.scss';
import {MainPage} from './pages/MainPage.ts';
import {Header} from './components/header/Header.ts';
import {Hero} from './components/hero/Hero.ts';
import {Experience} from './components/experience/Experience.ts';

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('app') as HTMLElement;
  const header = new Header();
  const hero = new Hero();
  const experience = new Experience();
  const mainPage = new MainPage(container, {header, hero, experience});
  mainPage.render();

  window.addEventListener('beforeunload', () => {
    mainPage.destroy();
  })
});
