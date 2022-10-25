import { createStore } from 'vuex';

export default createStore({
  state: {
    lists: [
      {
        id: 1,
        name: 'List 1',
        items: [
          {
            id: 1,
            name: 'Item 1',
            checked: true,
            blocks: [
              { id: 1, idItem: 1 },
              { id: 2, idItem: 1 },
              { id: 3, idItem: 1 },
              { id: 4, idItem: 1 },
              { id: 5, idItem: 1 },
              { id: 6, idItem: 1 },
            ],
            color: '#C30000',
          },
          { id: 2, name: 'Item 2', checked: false, blocks: [], color: '#0011CB' },
          { id: 3, name: 'Item 3', checked: true, blocks: [], color: '#05CB00' },
          {
            id: 4,
            name: 'Item 4',
            checked: true,
            blocks: [
              { id: 1, idItem: 4 },
              { id: 2, idItem: 4 },
              { id: 3, idItem: 4 },
              { id: 4, idItem: 4 },
              { id: 5, idItem: 4 },
              { id: 6, idItem: 4 },
              { id: 7, idItem: 4 },
            ],
            color: '#DBEE07',
          },
        ],
      },
      {
        id: 2,
        name: 'List 2',
        items: [
          { id: 1, name: 'Item 1', checked: false, blocks: [], color: '#C30000' },
          { id: 2, name: 'Item 2', checked: false, blocks: [], color: '#0011CB' },
          {
            id: 3,
            name: 'Item 3',
            checked: false,
            blocks: [
              { id: 1, idItem: 3 },
              { id: 2, idItem: 3 },
            ],
            color: '#DBEE07',
          },
          {
            id: 4,
            name: 'Item 4',
            checked: false,
            blocks: [
              { id: 1, idItem: 3 },
              { id: 2, idItem: 4 },
              { id: 3, idItem: 4 },
              { id: 4, idItem: 4 },
              { id: 5, idItem: 4 },
            ],
            color: '#05CB00',
          },
          { id: 5, name: 'Item 4', checked: false, blocks: [], color: '#DB07EE' },
        ],
      },
      {
        id: 3,
        name: 'List 3',
        items: [
          {
            id: 1,
            name: 'Item 1',
            checked: false,
            blocks: [
              { id: 1, idItem: 1 },
              { id: 2, idItem: 1 },
              { id: 3, idItem: 1 },
              { id: 4, idItem: 1 },
              { id: 5, idItem: 1 },
            ],
            color: '#5007EE',
          },
          { id: 2, name: 'Item 2', checked: false, blocks: [], color: '#DB07EE' },
          { id: 3, name: 'Item 3', checked: false, blocks: [], color: '#0756EE' },
          { id: 4, name: 'Item 4', checked: false, blocks: [], color: '#07EEB9' },
          { id: 5, name: 'Item 3', checked: false, blocks: [], color: '#EE1607' },
          { id: 6, name: 'Item 4', checked: false, blocks: [], color: '#48EE07' },
        ],
      },
      {
        id: 4,
        name: 'List 4',
        items: [
          {
            id: 1,
            name: 'Item 1',
            checked: false,
            blocks: [
              { id: 1, idItem: 1 },
              { id: 2, idItem: 1 },
              { id: 3, idItem: 1 },
              { id: 4, idItem: 1 },
              { id: 5, idItem: 1 },
            ],
            color: '#5007EE',
          },
          { id: 2, name: 'Item 2', checked: false, blocks: [], color: '#DB07EE' },
          { id: 3, name: 'Item 3', checked: false, blocks: [], color: '#EE1607' },
          { id: 4, name: 'Item 4', checked: false, blocks: [], color: '#48EE07' },
          { id: 5, name: 'Item 2', checked: false, blocks: [], color: '#C30000' },
          {
            id: 6,
            name: 'Item 3',
            checked: false,
            blocks: [
              { id: 1, idItem: 6 },
              { id: 2, idItem: 6 },
            ],
            color: '#0011CB',
          },
          { id: 7, name: 'Item 4', checked: false, blocks: [], color: '#DBEE07' },
        ],
      },
      {
        id: 5,
        name: 'List 5',
        items: [
          { id: 1, name: 'Item 1', checked: true, blocks: [], color: '#DBEE07' },
          {
            id: 2,
            name: 'Item 2',
            checked: true,
            blocks: [
              { id: 1, idItem: 2 },
              { id: 2, idItem: 2 },
              { id: 3, idItem: 2 },
              { id: 4, idItem: 2 },
              { id: 5, idItem: 2 },
            ],
            color: '#48EE07',
          },
          { id: 3, name: 'Item 3', checked: false, blocks: [], color: '#C30000' },
          {
            id: 4,
            name: 'Item 4',
            checked: true,
            blocks: [
              { id: 1, idItem: 4 },
              { id: 2, idItem: 4 },
              { id: 3, idItem: 4 },
            ],
            color: '#0011CB',
          },
        ],
      },
    ],
  },
  getters: {
    getLists: (state) => state.lists,
    getItems: (state) => (idList) => state.lists.find((list) => list.id === idList).items,
    getItemById: (state) => (idList, idItem) =>
      state.lists.find((list) => list.id === idList).items.find((item) => item.id === idItem),
    getSelectedItems: (state) => (idList) => {
      return state.lists.find((list) => list.id === idList).items.filter((item) => item.checked);
    },
    getSelectedBlocks: (state) => (idList) => {
      const result = [];
      state.lists
        .find((list) => list.id === idList)
        .items.filter((item) => item.checked)
        .map((item) => result.push([...item.blocks]));
      return [].concat(...result);
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
    whatIsBlockColor: (state) => (idList, idItem) => {
      return state.lists.find((list) => list.id === idList).items.find((item) => item.id === idItem)
        .color;
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
        .items.find((item) => item.id === idItem).blocks -= 1;
    },
    setItems(state, { idList, items }) {
      console.log(items);
      state.lists.find((list) => list.id === idList).items = items;
    },
  },
  actions: {},
  modules: {},
});
