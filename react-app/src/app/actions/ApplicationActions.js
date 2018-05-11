import AC from '../constants/ApplicationConstants';

export const enableSPA = () => {
	return {
		type: AC.SPA_ENABLED
	};
};

export const foo = () => {
	// Just to supress warning in browser when you have single export
};
