let gtag;

export const initializeGTag = (trackingId) => {
    gtag('js', new Date());
    gtag('config', trackingId);
    return 'ok';
};