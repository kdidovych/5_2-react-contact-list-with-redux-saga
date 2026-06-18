import {CONTACT_ACTION_TYPES} from "../actions/actionTypes.js";

const initialState = {
    items: [],
    isFetching: false,
    error: null
};

export default function contactsReducer(state = initialState, {type, payload}) {
    switch (type) {
        case CONTACT_ACTION_TYPES.GET.REQUEST:
        case CONTACT_ACTION_TYPES.ADD.REQUEST:
        case CONTACT_ACTION_TYPES.UPDATE.REQUEST:
        case CONTACT_ACTION_TYPES.DELETE.REQUEST:
            return {...state, isFetching: true, error: null};
        case CONTACT_ACTION_TYPES.GET.SUCCESS:
            return {...state, items: payload, isFetching: false};
        case CONTACT_ACTION_TYPES.ADD.SUCCESS:
            return {
                ...state,
                items: [...state.items, payload],
                isFetching: false,
            };
        case CONTACT_ACTION_TYPES.UPDATE.SUCCESS:
            return {
                ...state,
                items: state.items.map((contact) => contact.id === payload.id ? payload : contact),
                isFetching: false,
            };
        case CONTACT_ACTION_TYPES.DELETE.SUCCESS:
            return {
                ...state,
                items: state.items.filter((contact) => contact.id !== payload),
                isFetching: false,
            };
        case CONTACT_ACTION_TYPES.GET.ERROR:
        case CONTACT_ACTION_TYPES.ADD.ERROR:
        case CONTACT_ACTION_TYPES.UPDATE.ERROR:
        case CONTACT_ACTION_TYPES.DELETE.ERROR:
            return {...state, isFetching: false, error: payload}
        default:
            return state;
    }
}