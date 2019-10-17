

let initialState = {
   
    2020:{

    },
    
    2019: {
        TeamsScore: {

        },
        
        tur_1: [
            {
                team1: 'Азмол',
                team2: 'Молния',
                scoreTeam1: 4,
                scoreTeam2: 1,
                status: 'Сыграные'

            },
       
        ],
        
    },
    

};

const teamsReducer = (state = initialState, action) => {
  switch (action.type) {
    
    default:
      return state;
  }
};



export default teamsReducer;
