import {connect} from 'react-redux'
import TurnirTable from './TurnirTable';

let mapStateToProps = (state) =>{

  return {
      teams: state.teams.teams,
      
  }
}

let mapDispatchToProps = (dispatch) => {
  return {

     
  }
}

const TeamsListContainer = connect(mapStateToProps, mapDispatchToProps)(TurnirTable)

export default TeamsListContainer;