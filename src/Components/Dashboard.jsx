import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addWidgetToCategory, removeWidgetFromCategory } from '../redux/dashboardSlice';
import './Dashboard.css';
import logo from '../../src/assets/logo.png'; // Import your image here
import widgetPlaceholder from '../../src/assets/cspm.png'; // Import a placeholder image

const Dashboard = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector(state => state.dashboard);

  const handleAddWidget = (categoryId) => {
    const widgetName = prompt('Enter Widget Name:');
    const widgetText = prompt('Enter Widget Text:');
    const widget = { id: `w${Date.now()}`, name: widgetName, text: widgetText };
    dispatch(addWidgetToCategory({ categoryId, widget }));
    dispatch(addWidget(widget));
  };

  const handleRemoveWidget = (categoryId, widgetId) => {
    dispatch(removeWidgetFromCategory({ categoryId, widgetId }));
    dispatch(removeWidget(widgetId));
  };

  return (
    <div className='' >
    <div className="logo">
    <img src={logo} alt="Dashboard Logo"  /> 
    </div>
    <div className="dashboard-container">
    
      {categories.map(category => (
        <div key={category.id} className="category">
          <h2>{category.name}</h2>
          <div className='add-widget-form'>
          <button  onClick={() => handleAddWidget(category.id)}>+ Add Widget</button>
          </div>
          {category.widgets.map(widget => (
            <div key={widget.id} className="widget">
              <h3>{widget.name}</h3>
              <p>{widget.text}</p>
              <div className="widget-placeholder">
              <img src={widgetPlaceholder} alt="Widget Placeholder"  /> 
              </div>
              <button onClick={() => handleRemoveWidget(category.id, widget.id)}>✖ Remove</button>
            </div>
          ))}
        </div>
      ))}
    </div>
    </div>
  );
};

export default Dashboard;
