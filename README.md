# react-classset

`classSet()` is a neat utility for easily manipulating the DOM `class` string. This previously resided inside [React](https://github.com/facebook/react) as a utility, but is now pulled out and library-agnostic.

Here's a common scenario

```javascript
var classString = 'message';
if (isImportant) {
  classString += ' message-important';
}
if (isRead) {
  classString += ' message-read';
}
```

This can quickly get tedious, as assigning class name strings can be hard to read and error-prone. `classSet()` solves this problem:

```javascript
var classString = classSet({
  'message': true,
  'message-important': isImportant,
  'message-read': isRead
});
```

When using `classSet()`, pass an object with keys of the CSS class names you might or might not need. Truthy values will result in the key being a part of the resulting string.

Alternatively, you can also use it this way:

```javascript
cx('a', 0, null, undefined, 'b'); // 'a 0 b', discards null values
```

No more hacky string concatenations!
