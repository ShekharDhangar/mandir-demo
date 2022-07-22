import { useState, useCallback, useEffect } from 'react';

export const useMediaQuery = (width) => {
    const [targetReached, setTargetReached] = useState(false);

    const updateTarget = useCallback((e) => {
        if (e.matches) {
            setTargetReached(true);
        } else {
            setTargetReached(false);
        }
    }, []);

    useEffect(() => {
        const media = window.matchMedia(`(min-width: ${width}px)`);
        // Check on mount (callback is not called until a change occurs)

        if (media.matches) {
            setTargetReached(true);
        }

        if (media.addEventListener) {
            media.addEventListener('change', updateTarget)
            return (() => media.removeEventListener("change", updateTarget));
        } else {
            // backwards compatibility
            media.addListener(updateTarget)
            return (() => media.removeListener("change", updateTarget));
        }

    }, []);

    return targetReached;
};
