import AC from '../constants/ApplicationConstants';

export const initialState = {
	isSPA: false
};

export default function applicationReducer(previousState = initialState, action) {
	switch (action.type) {
		case AC.SPA_ENABLED:
			return {
				...previousState,
				isSPA: true
			};
		default:
			return previousState;
	}
}
