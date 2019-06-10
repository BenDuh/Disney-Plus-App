const INITIAL_STATE = {
    company: []
}

export const GET_COMPANY = 'GET_COMPANY'
export const GET_COMPANY_REQUEST = 'GET_COMPANY_REQUEST'

export const getCompany = (company) => {
    return {
        type: GET_COMPANY,
        payload: {
            company
        }
    }
}

export const getCompanyRequest = (id) => {
    return {
        type: GET_COMPANY_REQUEST,
        id
    }
}

export const companyReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_COMPANY:
            return {
                ...state,
                company: [...(action.payload.company)]
            }
        default:
            return state
    }
}
