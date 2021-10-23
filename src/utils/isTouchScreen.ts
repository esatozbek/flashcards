function isTouchScreen(): boolean {
    return (
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        (navigator as Navigator & { msMaxTouchPoints: number }).msMaxTouchPoints > 0
    );
}

export default isTouchScreen;
