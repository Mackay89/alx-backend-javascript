// Create a WeakMap instance
export const weakMap = new WeakMap();

// Create and export the queryAPI function
export function queryAPI(endpoint) {
    if (!weakMap.has(endpoint)) {
        weakMap.set(endpoint, 0);
    }
    
    let callCount = weakMap.get(endpoint);
    callCount += 1;
    
    if (callCount >= 5) {
        throw new Error('Endpoint load is high');
    }
    
    weakMap.set(endpoint, callCount);
}

