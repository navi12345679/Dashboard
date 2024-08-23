import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [
    {
      id: 'c1',
      name: 'CSPM Executive Dashboard',
      widgets: [
        { id: 'w1', name: 'Pass/Fail', text: 'Displays the pass or fail information' },
        { id: 'w2', name: 'Percentage', text: 'Displays the percentage' },
      ],
    },
    {
      id: 'c2',
      name: 'Security Overview',
      widgets: [{ id: 'w3', name: 'Overall security score', text: 'Displays data from 0-100' }],
    },
  ],
  allWidgets: [
    { id: 'w1', name: 'Pass/Fail', text: 'Displays the pass or fail information' },
    { id: 'w2', name: 'Percentage', text: 'Displays the percentage' },
    { id: 'w3', name: 'Overall security score', text: 'Displays data from 0-100' },
  ],
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    addWidgetToCategory: (state, action) => {
      const { categoryId, widget } = action.payload;
      const category = state.categories.find(c => c.id === categoryId);
      if (category) {
        category.widgets.push(widget);
      }
    },
    removeWidgetFromCategory: (state, action) => {
      const { categoryId, widgetId } = action.payload;
      const category = state.categories.find(c => c.id === categoryId);
      if (category) {
        category.widgets = category.widgets.filter(w => w.id !== widgetId);
      }
    },
    addWidget: (state, action) => {
      const widget = action.payload;
      state.allWidgets.push(widget);
    },
    removeWidget: (state, action) => {
      const widgetId = action.payload;
      state.allWidgets = state.allWidgets.filter(w => w.id !== widgetId);
      state.categories.forEach(category => {
        category.widgets = category.widgets.filter(w => w.id !== widgetId);
      });
    },
  },
});

export const { addWidgetToCategory, removeWidgetFromCategory, addWidget, removeWidget } = dashboardSlice.actions;
export default dashboardSlice.reducer;
