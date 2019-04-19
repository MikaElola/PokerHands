import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Analyst from './components/Analyst';
import { shallow, configure, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('No decks yet', () => {
  const wrapper = shallow(<App />);
  const p = wrapper.find('p.deckNmbr').text()
  expect(p).toEqual("Nyt pelaat 0 pakalla");
})

it('Deck added', () => {
  const wrapper = shallow(<App />);
  const btn = wrapper.find('button.deck')
  btn.simulate('click')
  const p = wrapper.find('p.deckNmbr').text()
  expect(p).toEqual("Nyt pelaat 1 pakalla");
})

it('Dealt the hand', () => {
  const wrapper = shallow(<App />);  
  const btnDeck = wrapper.find('button.deck')
  btnDeck.simulate('click')
  const btn = wrapper.find('button.deal')
  btn.simulate('click')
  const hand1State = wrapper.state().hand1;
  expect(hand1State.length).toBe(5); 
//btn with classees btn.class
})

