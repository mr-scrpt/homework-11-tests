// Компонент Counter - простой счётчик
// Напишите для него тесты.
// Убедитесь, что вы протестировали всю функциональнось.
// Также проверьте что компонент рендерится верно, используя Snapshot тест.

// * Задание со звёздочкой - выполнять не обязательно

// Вынесите логику в хук и протестируйте его

import React from 'react';
import ReactDOM from 'react-dom';
import { Counter } from "./Counter";
import { shallow } from 'enzyme';

describe('тестирование компонента-счетчика', ()=>{

  it(' - компонент рендерится',  ()=> {
    const div = document.createElement('div');
    ReactDOM.render(<Counter/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it(' - начальное значение счетчика верно', ()=> {
    const wrapper = shallow(<Counter  />);
    expect(wrapper.find('div').text()).toEqual('0');

  });

  it(' - есть кнопка инкримент',  ()=> {
    const wrapper = shallow(<Counter  />);
    expect(wrapper.find('button.increment').text()).toEqual('Increment');
  });

  it(' - есть кнопка декремент',  ()=> {
    const wrapper = shallow(<Counter  />);
    expect(wrapper.find('button.decrement').text()).toEqual('Decrement');
  });

  it(' - инкримент счетчика',  ()=> {
    const wrapper = shallow(<Counter  />);
    wrapper.find('button.increment').simulate('click');
    expect(wrapper.find('div').text()).toEqual('1');
  });

  it(' - декремент счетчика',  ()=> {
    const wrapper = shallow(<Counter  />);
    wrapper.find('button.decrement').simulate('click');
    expect(wrapper.find('div').text()).toEqual('-1');
  });
});

