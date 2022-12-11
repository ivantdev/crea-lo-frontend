// hook to detect device type
import { useState, useEffect } from 'react';
export default function useDeviceDetect() {
    const [isMobile, setMobile] = useState(false);
    console.log(navigator.userAgent)
    useEffect(() => {
        const userAgent =
            typeof window.navigator === 'undefined' ? '' : navigator.userAgent;
        const mobile = Boolean(
            userAgent.match(
                /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
            )
        );
        setMobile(mobile);
    }, []);
    return { isMobile };
}
