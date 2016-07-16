var booleanCondition = require('esmangle-evaluator').booleanCondition
var recast = require('recast')
var types = recast.types
var b = types.builders

var methods = {}

/**
 *  "||" and "&&"
 */
methods.visitLogicalExpression = function (path) {
  var leftEval = booleanCondition(path.node.left)

  if (typeof leftEval !== 'boolean') {
    // console.log('___ %s ___', path.node.operator)
    this.traverse(path)
    return
  }

  if (leftEval === true && path.node.operator === '||') {
    // console.log('true || ___')
    path.replace(b.literal(true))
    recast.visit(path, methods)
    return false
  }

  if (leftEval === true && path.node.operator === '&&') {
    // console.log('true && ___')
    path.replace(path.node.right)
    recast.visit(path, methods)
    return false
  }

  if (leftEval === false && path.node.operator === '&&') {
    // console.log('false && ___')
    path.replace(b.literal(false))
    recast.visit(path, methods)
    return false
  }

  if (leftEval === false && path.node.operator === '||') {
    // console.log('false || ___')
    path.replace(path.node.right)
    recast.visit(path, methods)
    return false
  }
}

/**
 *  "if" and ternary "?"
 */
methods.visitIfStatement = function (path) {
  var testEval = booleanCondition(path.node.test)

  if (typeof testEval !== 'boolean') {
    // console.log('if/? ___')
    this.traverse(path)
    return
  }

  if (testEval === true) {
    // console.log('if/? (true)')
    path.replace(path.value.consequent)
    recast.visit(path, methods)
    return false
  }

  if (testEval === false) {
    // console.log('if/? (false)')
    path.replace(path.value.alternate)
    recast.visit(path, methods)
    return false
  }
}

methods.visitConditionalExpression = methods.visitIfStatement

module.exports = function (branch) {
  recast.visit(branch, methods)

  return branch
}
