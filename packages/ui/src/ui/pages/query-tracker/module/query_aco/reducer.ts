import {Action} from 'redux';
import {ActionD} from '../../../../types';
import {QUERY_ACO_LOADING} from './constants';
import {GetQueryTrackerInfoResponse} from '../../../../../shared/yt-types';

export interface QueryACOState {
    data: GetQueryTrackerInfoResponse;
    loading: boolean;
    loaded: boolean;
    error: string | null;
}

const initialState: QueryACOState = {
    data: {
        cluster_name: '',
        access_control_objects: [],
        query_tracker_stage: '',
        supported_features: {
            access_control: false,
        },
    },
    loading: false,
    loaded: false,
    error: null,
};
export function reducer(state = initialState, action: QueryACOActions): QueryACOState {
    switch (action.type) {
        case QUERY_ACO_LOADING.REQUEST: {
            return {
                ...state,
                loading: true,
            };
        }

        case QUERY_ACO_LOADING.SUCCESS: {
            return {
                ...state,
                error: null,
                loading: false,
                loaded: true,
                ...action.data,
            };
        }

        case QUERY_ACO_LOADING.FAILURE: {
            return {
                ...state,
                error: null,
                loading: false,
            };
        }

        default:
            return state;
    }
}

export type QueryACOActions =
    | ActionD<typeof QUERY_ACO_LOADING.SUCCESS, Pick<QueryACOState, 'data'>>
    | Action<typeof QUERY_ACO_LOADING.FAILURE>
    | Action<typeof QUERY_ACO_LOADING.REQUEST>;
