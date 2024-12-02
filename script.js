// Select the dropdown list and button elements
const colorSelect = document.getElementById('colorSelect');
const button = document.querySelector('input[type="button"]');

button.addEventListener('click', () => {
  // Get the selected index of the dropdown
  const selectedIndex = colorSelect.selectedIndex;

  // Check if an option is selected (index >= 0)
  if (selectedIndex >= 0) {
    // Remove the selected option from the dropdown list
    colorSelect.options[selectedIndex].remove();
  }
});
