import React from 'react';
import ReactDOM from 'react-dom';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('render all three JSX components', () => {
  const wrapper = shallow(<App />);
  const welcome = <h1>Welcome to T-Mobile</h1>;
  const excited = <h2>We're excited to meet you</h2>;
  const div =
    <div className="box">
      <span className="box-text">400 x 200</span>
    </div>;
    
  expect(wrapper.contains(welcome)).toEqual(true);
  expect(wrapper.contains(excited)).toEqual(true);
  expect(wrapper.contains(div)).toEqual(true);
});
