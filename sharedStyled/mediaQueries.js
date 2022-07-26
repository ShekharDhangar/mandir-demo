const customMediaQuery = (minWidth, width = "min") => `@media (${width}-width: ${minWidth}px)`;

export const media = {
    custom: customMediaQuery,
    tablet: customMediaQuery(600),
    mediumTablet: customMediaQuery(768),
    largeTablet: customMediaQuery(1024),
    desktop: customMediaQuery(1280),
};