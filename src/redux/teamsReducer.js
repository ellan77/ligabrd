

let initialState = {
  
    teams: [
        {
            id: 1,
            name: 'Азмол',
            logo: '',

        },
        {
            id: 2,
            name: 'Молния',
            logo: '',

        },
        {
            id: 3,
            name: 'Восток',
            logo: '',

        },
        {
            id: 4,
            name: 'Арсенал',
            logo: '',

        },
        {
            id: 5,
            name: 'Ветеран',
            logo: '',

        },
        {
            id: 6,
            name: 'Фортуна',
            logo: '',

        },
        {
            id: 7,
            name: 'Строитель-Агрис-Групп',
            logo: '',

        },
        {
            id: 8,
            name: 'Чайка',
            logo: '',

        },
        {
            id: 9,
            name: 'Энергия',
            logo: '',

        },
        {
            id: 10,
            name: 'Луч',
            logo: '',

        },
        {
            id: 11,
            name: 'Шмидт',
            logo: '',

        },
        
    ]

};

const teamsReducer = (state = initialState, action) => {
  switch (action.type) {
    
    default:
      return state;
  }
};



export default teamsReducer;
