import { createStore } from 'vuex';

export default createStore({
  state: {
    lists: [
      {
        id: 1,
        name: 'List 1',
        items: [
          { id: 1, name: 'Item 1', checked: true, amount: 5, color: '#C30000' },
          { id: 2, name: 'Item 2', checked: false, amount: 3, color: '#0011CB' },
          { id: 3, name: 'Item 3', checked: true, amount: 6, color: '#05CB00' },
          { id: 4, name: 'Item 4', checked: false, amount: 7, color: '#DBEE07' },
        ],
      },
      {
        id: 2,
        name: 'List 2',
        items: [
          { id: 1, name: 'Item 1', checked: false, amount: 8, color: '#C30000' },
          { id: 2, name: 'Item 2', checked: false, amount: 11, color: '#0011CB' },
          { id: 3, name: 'Item 3', checked: false, amount: 2, color: '#DBEE07' },
          { id: 4, name: 'Item 4', checked: false, amount: 1, color: '#05CB00' },
          { id: 5, name: 'Item 4', checked: false, amount: 0, color: '#DB07EE' },
        ],
      },
      {
        id: 3,
        name: 'List 3',
        items: [
          { id: 1, name: 'Item 1', checked: false, amount: 3, color: '#5007EE' },
          { id: 2, name: 'Item 2', checked: false, amount: 2, color: '#DB07EE' },
          { id: 3, name: 'Item 3', checked: false, amount: 1, color: '#0756EE' },
          { id: 4, name: 'Item 4', checked: false, amount: 1, color: '#07EEB9' },
          { id: 5, name: 'Item 3', checked: false, amount: 5, color: '#EE1607' },
          { id: 6, name: 'Item 4', checked: false, amount: 4, color: '#48EE07' },
        ],
      },
      {
        id: 4,
        name: 'List 4',
        items: [
          { id: 1, name: 'Item 1', checked: false, amount: 6, color: '#5007EE' },
          { id: 2, name: 'Item 2', checked: false, amount: 3, color: '#DB07EE' },
          { id: 3, name: 'Item 3', checked: false, amount: 4, color: '#EE1607' },
          { id: 4, name: 'Item 4', checked: false, amount: 6, color: '#48EE07' },
          { id: 5, name: 'Item 2', checked: false, amount: 1, color: '#C30000' },
          { id: 6, name: 'Item 3', checked: false, amount: 2, color: '#0011CB' },
          { id: 7, name: 'Item 4', checked: false, amount: 3, color: '#DBEE07' },
        ],
      },
      {
        id: 5,
        name: 'List 5',
        items: [
          { id: 1, name: 'Item 1', checked: true, amount: 4, color: '#DBEE07' },
          { id: 2, name: 'Item 2', checked: true, amount: 5, color: '#48EE07' },
          { id: 3, name: 'Item 3', checked: false, amount: 3, color: '#C30000' },
          { id: 4, name: 'Item 4', checked: true, amount: 2, color: '#0011CB' },
        ],
      },
    ],
  },
  getters: {
    getLists: (state) => state.lists,
    getItems: (state) => (idList) => state.lists.find((list) => list.id === idList).items,
    getItemById: (state) => (idList, idItem) =>
      state.lists.find((list) => list.id === idList).items.find((item) => item.id === idItem),
    getSelecedItems: (state) => (idList) => {
      const result = [];
      const arrayOfItems = state.lists
        .find((list) => list.id === idList)
        .items.filter((item) => item.checked);

      for (let i = 0; i < arrayOfItems.length; i++) {
        for (let j = 0; j < [...Array(arrayOfItems[i].amount)].length; j++) {
          result.push({ color: arrayOfItems[i].color, id: arrayOfItems[i].id });
        }
      }

      return result;
    },
    isAllItemsSelected: (state) => (idList) =>
      state.lists.find((list) => list.id === idList).items.filter((item) => item.checked).length ===
      state.lists.find((list) => list.id === idList).items.length,
    isHasSelectedItem: (state) => (idList) => {
      const items = state.lists
        .find((list) => list.id === idList)
        .items.filter((item) => item.checked);
      if (items.length) {
        return true;
      } else {
        return false;
      }
    },
  },
  mutations: {
    setCheckedAllItems(state, { idList, value }) {
      state.lists
        .find((list) => list.id === idList)
        .items.forEach((item) => (item.checked = value));
    },
    removeItem(state, { idList, idItem }) {
      state.lists
        .find((list) => list.id === idList)
        .items.find((item) => item.id === idItem).amount -= 1;
    },
  },
  actions: {},
  modules: {},
});
