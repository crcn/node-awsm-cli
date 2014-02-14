function cleanCommand (command) {
  var stringMatcher;
  var strings = command.match(stringMatcher = /['"].*?['"]/g),
  placeholder = "__STRING__";
  command = command.replace(stringMatcher, placeholder);

  var refMatcher = /(\w)\.(\w)/;

  while (refMatcher.test(command)) {
    command = command.replace(refMatcher, "$1().$2");
  }

  while (~command.indexOf(placeholder)) {
    command = command.replace(placeholder, strings.shift());
  }

  console.log(command);
}


console.log(cleanCommand("a.b.c.d('1.2.3').ab('123')"))