;(function(global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined'
    ? (module.exports = factory())
    : typeof define === 'function' && define.amd
      ? define(factory)
      : ((global = global || self), (global.createVuexLogger = factory()))
})(this, function() {
  'use strict'

  /**
   * Get the first item that pass the test
   * by second argument function
   *
   * @param {Array} list
   * @param {Function} f
   * @return {*}
   */
  function find(list, f) {
    return list.filter(f)[0]
  }

  /**
   * Deep copy the given object considering circular structure.
   * This function caches all nested objects and its copies.
   * If it detects circular structure, use cached copy to avoid infinite loop.
   *
   * @param {*} obj
   * @param {Array<Object>} cache
   * @return {*}
   */
  function deepCopy(obj, cache) {
    if (cache === void 0) cache = []

    // just return if obj is immutable value
    if (obj === null || typeof obj !== 'object') {
      return obj
    }

    // if obj is hit, it is in circular structure
    const hit = find(cache, function(c) {
      return c.original === obj
    })
    if (hit) {
      return hit.copy
    }

    const copy = Array.isArray(obj) ? [] : {}
    // put the copy into cache at first
    // because we want to refer it in recursive deepCopy
    cache.push({
      original: obj,
      copy: copy
    })

    Object.keys(obj).forEach(function(key) {
      copy[key] = deepCopy(obj[key], cache)
    })

    return copy
  }

  // Credits: borrowed code from fcomb/redux-logger

  function createLogger(ref) {
    if (ref === void 0) ref = {}
    let collapsed = ref.collapsed
    if (collapsed === void 0) collapsed = true
    let filter = ref.filter
    if (filter === void 0)
      filter = function(mutation, stateBefore, stateAfter) {
        return true
      }
    let transformer = ref.transformer
    if (transformer === void 0)
      transformer = function(state) {
        return state
      }
    let mutationTransformer = ref.mutationTransformer
    if (mutationTransformer === void 0)
      mutationTransformer = function(mut) {
        return mut
      }
    let logger = ref.logger
    if (logger === void 0) logger = console

    return function(store) {
      let prevState = deepCopy(store.state)

      store.subscribe(function(mutation, state) {
        if (typeof logger === 'undefined') {
          return
        }
        const nextState = deepCopy(state)

        if (filter(mutation, prevState, nextState)) {
          const time = new Date()
          const formattedTime =
            ' @ ' +
            pad(time.getHours(), 2) +
            ':' +
            pad(time.getMinutes(), 2) +
            ':' +
            pad(time.getSeconds(), 2) +
            '.' +
            pad(time.getMilliseconds(), 3)
          const formattedMutation = mutationTransformer(mutation)
          const message = 'mutation ' + mutation.type + formattedTime
          const startMessage = collapsed ? logger.groupCollapsed : logger.group

          // render
          try {
            startMessage.call(logger, message)
          } catch (e) {
            console.log(message)
          }

          logger.log(
            '%c prev state',
            'color: #9E9E9E; font-weight: bold',
            transformer(prevState)
          )
          logger.log(
            '%c mutation',
            'color: #03A9F4; font-weight: bold',
            formattedMutation
          )
          logger.log(
            '%c next state',
            'color: #4CAF50; font-weight: bold',
            transformer(nextState)
          )

          try {
            logger.groupEnd()
          } catch (e) {
            logger.log('—— log end ——')
          }
        }

        prevState = nextState
      })
    }
  }

  function repeat(str, times) {
    return new Array(times + 1).join(str)
  }

  function pad(num, maxLength) {
    return repeat('0', maxLength - num.toString().length) + num
  }

  return createLogger
})
