'strict';

// @ts-check

/**
 * @template T
 * @typedef Subscriber
 * @type {(current: T, prev: T) => void}
 */

/**
 * @template T
 * @typedef Store
 * @type {Object}
 * @prop {(setter: ((state: T) => T) | T) => void} set
 * @prop {() => T} get
 * @prop {(subscriber: Subscriber<T>) => () => void} subscribe
 */

/**
 * @param {unknown} x
 * @returns {x is Function}
 */
const isFunction = (x) => typeof x === 'function'

/**
 * @template T
 * @param {T} initialState
 * @returns {Store<T>}
 */
export function store(initialState) {
    let state = initialState;
    /** @type {Set<Subscriber<T>>} */
    const subscribers = new Set()

    return {
        set(setter) {
            const next = isFunction(setter) ? setter(state) : setter

            if (next !== state) {
                const prev = state
                state = next
                subscribers.forEach((subscriber) => {
                    subscriber(state, prev)
                })
            }
        },
        get() {
            return state
        },
        subscribe(subscriber) {
            subscribers.add(subscriber)

            return () => {
                subscribers.delete(subscriber)
            }
        },
    }
}
