import star from '../../../../public/star.png';
import { initializeExpTooltip, state } from '../lib/initializeExpTooltip';
import css from './ExpTooltip.module.scss';

export const ExpTooltip = (className, tooltipId) => {
  document.addEventListener('DOMContentLoaded', () => {
    initializeExpTooltip(tooltipId, state);
  });

  return `
    <span id=${tooltipId} class='${css.tooltip} ${className}'>
      <div class=${css.leftSide}>
        <div class=${css.equipment}>
          <h4>Комплектация</h4>
          <div class=${css.radioGroup}>
            <div class=${css.radioItem}>
              <input type="radio" id="${tooltipId}_option1" name="option1" value="1">
              <label for="${tooltipId}_option1">Стандартная</label>
            </div>
            <div class=${css.radioItem}>
              <input type="radio" id="${tooltipId}_option2" name="option2" value="2">
              <label for="${tooltipId}_option2">Элитная</label>
            </div>
            <div class=${css.radioItem}>
              <input type="radio" id="${tooltipId}_option3" name="option3" value="3">
              <label for="${tooltipId}_option3">Премиум</label>
            </div>
          </div>
        </div>
        <div class=${css.battlesCount}>
          <h4>Количество боёв</h4>
          <div class=${css.sliderWrapper}>
            <input type="range" min="0" max="300" value="0" step="1" class=${css.slider} name="slider" id="${tooltipId}_slider">
          </div>
        </div>
      </div>
      <div class=${css.rightSide}>
        <div class=${css.expWrapper}>
          <h4>Опыт танка</h4>
          <div class=${css.tankExp}>
            <img src=${star} alt='star'></img>
            <span id="${tooltipId}_tankExp" class=${css.tankExpValue}>0</span>
          </div>
        </div>
        <div class=${css.sliderValue}>
          <input id="${tooltipId}_sliderValue" type='number' placeholder="0"></input>
        </div>
      </div>
    </span>
    `;
};
