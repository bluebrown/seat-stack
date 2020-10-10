/* eslint-disable no-unused-vars */

const combobox = function () {
  return {
    items: [],
    selectedItems: [],
    buttonLabel () {
      if (this.selectedItems.length > 0) {
        return this.selectedItems.join(', ')
      } else {
        return 'Please select...'
      }
    },
    itemSelected (item) {
      return this.selectedItems.indexOf(item) > -1
    },
    toggleItem (item) {
      if (this.itemSelected(item)) {
        this.selectedItems.filter(i => i !== item)
      } else {
        this.selectedItems.push(item)
      }
    },
    showCheckboxes: false
  }
}
