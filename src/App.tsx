import { useState } from 'react';
import * as C from './App.styles';

import { ListItem } from './components/ListItem';
import { AddArea } from './components/AddArea';

import { Item } from './types/Item'

const App = () => {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: 'comprar o pão na padaria', done: false },
    { id: 2, name: 'comprar um bolo na padaria', done: true },
  ]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    });
    setList(newList);
  }

  const HandleChangeCheck = (index: number, checkValue: boolean) => {
    let newList = [...list];
    for (let i = 0; i < newList.length; i++) {
      if (newList[i].id === index) {
        newList[i].done = checkValue;
      }
    }
    setList(newList);
  }

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>

        {/* Área de adicionar nova tarefa */}
        <AddArea onEnter={handleAddTask} />

        {/* Lista de tarefas */}
        {list.map((item, index) => (
          <ListItem key={index} item={item} onCheck={HandleChangeCheck}/>
        ))}

      </C.Area>
    </C.Container>
  );
}

export default App;