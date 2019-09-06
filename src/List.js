import React, { useState, useReducer } from "react";

const ADD_ITEM = "add_item"
const REMOVE_ITEM = "remove_item"

const addItem = (item) => ({type: ADD_ITEM, payload: item})
const removeItem = (item) => ({type: REMOVE_ITEM, payload: item})

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return [...state, action.payload];
    case REMOVE_ITEM:
      return state.filter(item => item !== action.payload);
    default:
      throw new Error();
  }
};

export const List = () => {
  const [state, dispatch] = useReducer(reducer, []);
  const [text, setText] = useState("");

  const updateText = event => {
    setText(event.target.value);
  };

  const onAdd = () => {
    if (text && !state.includes(text)) {
      dispatch(addItem(text));
    }
    setText('');
  };

  const onRemove = value => () => {
    dispatch(removeItem(value));
  };

  return (
    <>
      <ul>
        {state.map(item => (
          <li key={item} onClick={onRemove(item)} className='listitem'>
            {item}
          </li>
        ))}
      </ul>
      <input value={text} onChange={updateText} className="input"/>
      <button onClick={onAdd} className='button'>Add item</button>
    </>
  );
};
