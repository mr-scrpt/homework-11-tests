// Компонент List - список
// Напишите для него тесты.
// Компонент позволяет добавлять элементы в список.
// При добавлении нового элемента тексовое поле очищается.

// При клике на элементы списка они удаляются.

// Убедитесь, что вы протестировали всю функциональнось.


import React from 'react';
import ReactDOM from 'react-dom';
import { List } from "./List";
import { shallow } from 'enzyme';


describe('тестирование компонента листа', ()=>{
  it(' - компонент рендерится',  ()=> {
    const div = document.createElement('div');
    ReactDOM.render(<List/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it(' - есть поле для ввода названия',  ()=> {
    const wrapper = shallow(<List/>);
    expect(wrapper.contains('input'));
  });

  it(' - есть кнопка для добавления пункта меню',  ()=> {
    const wrapper = shallow(<List/>);
    expect(wrapper.find('button').text()).toEqual('Add item');
  });



  it(' - добавление элемента',  async ()=> {
    const wrapper = shallow(<List/>);

    wrapper.find('.input').simulate('change', {target: {value: 'iddqd'}});
    wrapper.find('.button').simulate('click');
    expect(wrapper.find('ul').contains('iddqd')).toEqual(true);
    expect(wrapper.find('ul').children().length).toEqual(1);

  });

  it(' - удаление элемента',  async ()=> {
    const wrapper = shallow(<List/>);
    wrapper.find('.input').simulate('change', {target: {value: 'iddqd'}});
    wrapper.find('.button').simulate('click');
    wrapper.find('ul').children().first().simulate('click');
    expect(wrapper.find('ul').children().length).toEqual(0);

  });

});


