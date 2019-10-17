import {connect} from 'react-redux'
import TeamsList from './TeamsList'

let mapStateToProps = (state) =>{

    return {
        teams: state.teams.teams,
        
    }
}

let mapDispatchToProps = (dispatch) => {
    return {

       
    }
}

const TeamsListContainer = connect(mapStateToProps, mapDispatchToProps)(TeamsList)

export default TeamsListContainer;