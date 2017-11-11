const checkboxes = document.querySelectorAll('.inbox input[type=checkbox]');

let lastItemChecked;

function handleCheck(event) {
  // console.log(event);
  // console.log(this);

  let itemBetweenCheckedItems = false;

  if (event.shiftKey && this.checked) {
    checkboxes.forEach(checkbox => {
      if (checkbox === this || checkbox === lastItemChecked) {
        itemBetweenCheckedItems = !itemBetweenCheckedItems;
      }

      if (itemBetweenCheckedItems) {
        checkbox.checked = true;
      }
    });
  }

  lastItemChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
