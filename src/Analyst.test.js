import React from 'react';
import ReactDOM from 'react-dom';
import Analyst from './components/Analyst';
import App from './App';
import { shallow, configure, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';


configure({ adapter: new Adapter() });

describe('Analyst', () => {
    it('Reading analyzie data', () => {
        const wrapper = mount(<App />);
        const deckbtn = wrapper.find('button.deck')
        const dealbtn = wrapper.find('button.deal')
        deckbtn.simulate('click')
        dealbtn.simulate('click')

        const anabtn = wrapper.find('button.analysoi');
        anabtn.simulate('click')
        const p = wrapper.find('p.korkein').text()
        console.log("mount HTML", wrapper.debug())
        expect(p).not.toEqual('Korkein:')
    })

})