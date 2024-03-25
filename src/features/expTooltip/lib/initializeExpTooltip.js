import { calculateTankExp } from './calculateTankExp';

export let state = {};

const getTankExp = (state, tooltipId) => {
  const tankExperience = Math.floor(
    calculateTankExp(state[tooltipId].equipment, state[tooltipId].battlesCount)
  );

  return tankExperience;
};

export function initializeExpTooltip(tooltipId, state) {
  state[tooltipId] = {
    equipment: '',
    battlesCount: 0,
  };

  const input = document.getElementById(`${tooltipId}_slider`);
  if (!input) {
    console.log('Error content loading');
    return;
  }

  const radioInputs = document.querySelectorAll(
    `input[id^="${tooltipId}_option"]`
  );
  radioInputs.forEach(radioInput => {
    radioInput.addEventListener('change', event => {
      state[tooltipId].equipment = event.target.value;
      updateTankExp();

      radioInputs.forEach(input => {
        if (input !== event.target) {
          input.checked = false;
        }
      });
    });
  });

  const handleChange = event => {
    const inputValue = event.target.value;

    const sliderValue = document.getElementById(`${tooltipId}_sliderValue`);
    sliderValue.value = inputValue;
    input.style.background = `linear-gradient(
      to right,
      #ffd100 0%,
      #997d00 ${inputValue * 0.33}%,
      #262626 ${inputValue * 0.33}%,
      #303030 100%
    )`;

    state[tooltipId].battlesCount = inputValue;
    updateTankExp();
  };

  input.addEventListener('input', handleChange);

  const sliderValueInput = document.getElementById(`${tooltipId}_sliderValue`);
  if (sliderValueInput) {
    sliderValueInput.addEventListener('input', event => {
      const sliderValue = parseFloat(event.target.value);
      if (isNaN(sliderValue) || sliderValue === '') {
        sliderValue = 0;
      }
      input.value = sliderValue;
      input.dispatchEvent(new Event('input'));

      state[tooltipId].battlesCount = sliderValue;
      updateTankExp();
    });
  }

  const updateTankExp = () => {
    const tankExpElement = document.getElementById(`${tooltipId}_tankExp`);
    if (tankExpElement) {
      tankExpElement.textContent = getTankExp(state, tooltipId);
    }
  };
}
