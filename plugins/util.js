export default {
  typer(obj) {
    const pc = Object.prototype.toString.call(obj)
    switch (pc) {
      case '[object Boolean]':
        return 'Boolean'
      case '[object Number]':
        return 'Number'
      case '[object String]':
        return 'String'
      case '[object Array]':
        return 'Array'
      case '[object Object]':
        return 'Object'
      case '[object Null]':
        return 'Null'
      case '[object Undefined]':
        return 'Undefined'
      default:
        return 'UnknownType'
    }
  }
}
