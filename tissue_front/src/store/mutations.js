import {
    FETCH_HALL_LIST,
    FETCH_HALL,
  // performance
    FETCH_PERFORMANCE_LIST,
    FETCH_PERFORMANCE,
  
    FETCH_NOTICE_LIST,
    FETCH_NOTICE
   
} from './mutation-types'

export default{
    [FETCH_HALL_LIST](state, halls){
        state.halls = halls
    },
    [FETCH_HALL](state, hall){
        state.hall = hall

    [FETCH_PERFORMANCE_LIST] (state, performances) {
        state.performances = performances
    },
    [FETCH_PERFORMANCE] (state, performance) {
        state.performance = performance
    },

    [FETCH_NOTICE_LIST] (state, notices) {
        state.notices = notices
    },
}