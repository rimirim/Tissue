import {
    FETCH_HALL_LIST,
    FETCH_HALL,

    FETCH_COUPON_LIST,
    FETCH_COUPON,
    // performance
    FETCH_PERFORMANCE_LIST,
    FETCH_PERFORMANCE,
    FETCH_CONCERT_LIST,
    FETCH_MUSICAL_LIST,
    FETCH_THEATER_LIST,
    FETCH_EXHIBITION_LIST,
  
    FETCH_NOTICE_LIST,
    FETCH_NOTICE,
    FETCH_MEMBER_INFO,
    FETCH_MEMBER,
    FETCH_SEARCH_LIST,
    FETCH_SEARCH_LIST2,
    FETCH_NOTICE_SEARCH_LIST,
    // event
    FETCH_EVENT_LIST,
    FETCH_EVENT,

} from './mutation-types'


export default{
    [FETCH_HALL_LIST](state, halls){
        state.halls = halls
    },
    [FETCH_HALL](state, hall) {
        state.hall = hall
    },
    [FETCH_COUPON_LIST](state, couponList){
        state.couponList = couponList
    },
    [FETCH_COUPON](state, coupon) {
        state.coupon = coupon
    },
    [FETCH_CONCERT_LIST] (state, concertList) {
        state.concertList = concertList
    },
    [FETCH_MUSICAL_LIST] (state, musicalList) {
        state.musicalList = musicalList
    },
    [FETCH_THEATER_LIST] (state, theaterList) {
        state.theaterList = theaterList
    },
    [FETCH_EXHIBITION_LIST] (state, exhibitionList) {
        state.exhibitionList = exhibitionList
    },
    [FETCH_PERFORMANCE_LIST] (state, performances) {
        state.performances = performances
    },
    [FETCH_PERFORMANCE] (state, performance) {
        state.performance = performance
    },

    [FETCH_NOTICE_LIST] (state, notices) {
        state.notices = notices
    },
    [FETCH_NOTICE] (state, notice) {
        state.notice = notice
    },
    [FETCH_MEMBER_INFO](state, memberInfo) {
        state.memberInfo = memberInfo
    },
    [FETCH_MEMBER](state, member) {
        state.member = member
    },
    [FETCH_SEARCH_LIST](state, searchList) {
        state.searchList = searchList
    },
    [FETCH_SEARCH_LIST2](state, searchList) {
        state.searchList2 = searchList
    },
    [FETCH_NOTICE_SEARCH_LIST](state, noticeSearchList) {
        state.noticeSearchList = noticeSearchList
    },
    // event
    [FETCH_EVENT_LIST] (state, events) {
        state.events = events
    },
    [FETCH_EVENT] (state, event) {
        state.event = event
    }
}