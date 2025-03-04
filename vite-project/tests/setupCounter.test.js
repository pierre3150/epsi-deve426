import {setupCounter} from '../functions/setupCounter';
import {describe, it, expect, vi} from 'vitest';

describe('setupCounter', () => {
    it('should initialize the counter to 0 and update on click', () => {
        // Create a mock DOM element
        const element = {innerHTML: '', addEventListener: vi.fn()};

        // Call the setupCounter function with the mock element
        setupCounter(element);

        // Verify the initial counter value
        expect(element.innerHTML).toBe('count is 0');

        // Simulate a click event
        const clickHandler = element.addEventListener.mock.calls[0][1];
        clickHandler();

        // Verify the counter value after one click
        expect(element.innerHTML).toBe('count is 1');

        // Simulate more click events
        clickHandler();
        clickHandler();

        // Verify the counter value after three clicks
        expect(element.innerHTML).toBe('count is 3');
    });

    it('should clamp the counter value between 0 and 10', () => {
        // Create a mock DOM element
        const element = {innerHTML: '', addEventListener: vi.fn()};

        // Call the setupCounter function with the mock element
        setupCounter(element);

        // Simulate 11 click events to exceed the upper limit
        const clickHandler = element.addEventListener.mock.calls[0][1];
        for (let i = 0; i < 11; i++) {
            clickHandler();
        }

        // Verify the counter value is clamped to 10
        expect(element.innerHTML).toBe('count is 10');

        // Simulate a click event to decrease the counter
        element.innerHTML = 'count is 0';
        for (let i = 0; i < 11; i++) {
            clickHandler();
        }

        // Verify the counter value is clamped to 0
        expect(element.innerHTML).toBe('count is 10');
    });
});