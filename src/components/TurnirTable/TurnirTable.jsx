import React, { Component } from 'react';

class turnirTable extends Component {
  
  render() {

    return (
<>

      <table class="table turnir-table">
  <thead>
    <tr>
      <th><abbr title="Позиция">Поз</abbr></th>
      <th>Команды</th>
      <th><abbr title="Игры">И </abbr></th>
      <th><abbr title="Победы">П</abbr></th>
      <th><abbr title="Ничьи">Н</abbr></th>
      <th><abbr title="Проигрыши">П</abbr></th>
      <th><abbr title="Забитые голы">З</abbr></th>
      <th><abbr title="Пропущенные голы">П</abbr></th>
      <th><abbr title="Очки">О</abbr></th>
     
    </tr>
  </thead>
  <tbody>
    
    {this.props.teams.map(t => (

        <tr>

        <th>#</th>
        <td>{t.name} </td>
        <td>38</td>
        <td>23</td>
        <td>12</td>
        <td>3</td>
        <td>68</td>
        <td>36</td>
        <td>32</td>
        </tr>

    ))}
   
    
  </tbody>
</table>
</>
    );
  }
}

export default turnirTable;

