import {connect} from 'react-redux'
import Results from './Results';

let mapStateToProps = (state) =>{

  return {
      plays: state.plays,
      
  }
}

let mapDispatchToProps = (dispatch) => {
  return {

     
  }
}

const TeamsListContainer = connect(mapStateToProps, mapDispatchToProps)(Results)

export default TeamsListContainer;