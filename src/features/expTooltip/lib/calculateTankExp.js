export function calculateTankExp(selectedRadioButton, sliderValue) {
  let experience = 0;

  if (sliderValue >= 300) {
    sliderValue = 300;
  }

  switch (selectedRadioButton) {
    case '1':
      experience = sliderValue * 3;
      break;
    case '2':
      experience = sliderValue * 3 * 1.1;
      break;
    case '3':
      experience = sliderValue * 3 * 1.2;
      break;
    default:
      console.log('Invalid radio button');
      break;
  }

  return experience;
}
