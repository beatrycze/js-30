const checkboxes = document.querySelectorAll('.inbox input[type=checkbox]');

let lastItemChecked;

function handleCheck(event) {
  if (!this.checked) {
    lastItemChecked = undefined;
  }

  if(!event.shiftKey && this.checked) {
    lastItemChecked = this;
  }

  if (event.shiftKey && this.checked && !lastItemChecked) {
    let checkedItem = Array.from(checkboxes).find(checkbox => checkbox.checked && checkbox != this);
    if (checkedItem) {
      lastItemChecked = checkedItem;
    }
  }

  let itemBetweenCheckedItems = false;

  if (event.shiftKey && this.checked && lastItemChecked) {
    checkboxes.forEach(checkbox => {
      if (checkbox === this || checkbox === lastItemChecked) {
        itemBetweenCheckedItems = !itemBetweenCheckedItems;
      }

      if (itemBetweenCheckedItems) {
        checkbox.checked = true;
      }
    });
  }
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
