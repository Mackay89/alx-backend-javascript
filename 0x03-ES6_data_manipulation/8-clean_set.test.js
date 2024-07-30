import cleanSet from './8-clean_set';

describe('cleanSet', () => {
    it('should return filtered set values that start with the startString', () => {
        const set = new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']);
        expect(cleanSet(set, 'bon')).toBe('jovi-aparte-appetit');
    });

    it('should return an empty string if no values match the startString', () => {
        const set = new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']);
        expect(cleanSet(set, 'foo')).toBe('');
    });

    it('should return the whole set values if startString is empty', () => {
        const set = new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']);
        expect(cleanSet(set, '')).toBe('bonjovi-bonaparte-bonappetit-banana');
    });

    it('should handle an empty set', () => {
        const set = new Set([]);
        expect(cleanSet(set, 'bon')).toBe('');
    });
});

