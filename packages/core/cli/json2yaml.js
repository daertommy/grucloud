const assert = require("assert");
const { typeOf } = require("remedial");
const { replacerCredentials } = require("../tos");

const trimWhitespace = (input) =>
  input
    .split("\n")
    .map((x) => x.trimRight())
    .join("\n");

function stringify(data) {
  var handlers,
    indentLevel = "";

  handlers = {
    undefined: function () {
      // objects will not have `undefined` converted to `null`
      // as this may have unintended consequences
      // For arrays, however, this behavior seems appropriate
      return "null";
    },
    null: function () {
      return "null";
    },
    number: function (x) {
      return x;
    },
    boolean: function (x) {
      return x ? "true" : "false";
    },
    date: function (x) {
      return x.toJSON();
    },
    string: function (x, name) {
      // to avoid the string "true" being confused with the
      // the literal `true`, we always wrap strings in quotes
      const value =
        typeof name === "string"
          ? replacerCredentials(name, x)
          : JSON.stringify(x);
      return value;
    },
    array: function (x) {
      var output = "";

      if (0 === x.length) {
        output += "[]";
        return output;
      }

      indentLevel = indentLevel.replace(/$/, "  ");
      x.forEach(function (y, i) {
        var handler = handlers[typeOf(y)];
        assert(handler, "what the crap: " + typeOf(y));

        output += "\n" + indentLevel + "- " + handler(y, true);
      });
      indentLevel = indentLevel.replace(/  /, "");

      return output;
    },
    object: function (x, inArray, rootNode) {
      var output = "";

      if (0 === Object.keys(x).length) {
        output += "";
        return output;
      }

      if (!rootNode) {
        indentLevel = indentLevel.replace(/$/, "  ");
      }

      Object.keys(x).forEach(function (k, i) {
        var val = x[k],
          handler = handlers[typeOf(val)];

        if ("undefined" === typeof val) {
          // the user should do
          // delete obj.key
          // and not
          // obj.key = undefined
          // but we'll error on the side of caution
          return;
        }
        assert(handler, "what the crap: " + typeOf(val));

        if (!(inArray && i === 0)) {
          output += "\n" + indentLevel;
        }

        output +=
          k + ": " + handler(val, typeof val === "string" ? k : undefined);
      });
      indentLevel = indentLevel.replace(/  /, "");

      return output;
    },
    function: function () {
      return "[object Function]";
    },
  };

  return trimWhitespace(handlers[typeOf(data)](data, true, true) + "\n");
}

module.exports.stringify = stringify;
