import {
	useEffect,
	useMemo,
} from "react";

// Import Own Components
import debounce from "helpers/Functions/debounce";

/**
 * Creates a debouncedEntity function mapped to an array of dependencies and a debounce
 * cancelation controlled by react
 *
 * @author Yael Mártin A. Alcalá León <yael.alcalla@gmail.com>
 * @param callback callback function that will be controlled by the debounce
 * @param delay time to delay the callback each time the debouncedEntity is called
 * @param deps array of dependencies
 */
const useDebounce = (callback, delay, deps = []) => {
	const debouncedFn = useMemo(() => debounce(callback, delay), deps);

	// Clear Debounce when unmountnig
	useEffect(() => () => {
		debouncedFn.cancel();
	}, [debouncedFn]);

	return debouncedFn;
};

export default useDebounce;
