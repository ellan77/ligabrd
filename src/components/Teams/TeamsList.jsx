import React, { Component } from 'react';

class TeamsList extends Component {

  render() {

    return (
      <>
        <table class="table is-fullwidth">
          <thead>
            <tr>
              <th>Команды</th>
            </tr>
          </thead>
          <tbody>
            {this.props.teams.map(t => (
              <tr>
                <td className='teamView'><i class="fas fa-futbol"></i>  	&#160;<span> {t.name} </span> </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

export default TeamsList;