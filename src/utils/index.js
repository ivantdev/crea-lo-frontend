// interpolate two THREE.Colors
import { Color } from 'three';
const interpolateColors = (color1, color2, progress) => {
    const color = new Color();
    color.r = color1.r * (1 - progress) + color2.r * progress;
    color.g = color1.g * (1 - progress) + color2.g * progress;
    color.b = color1.b * (1 - progress) + color2.b * progress;
    return color;
};

export { interpolateColors }
