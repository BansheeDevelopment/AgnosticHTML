
# AgnosticHTML

AgnosticHTML is a lightweight utility for safely parsing HTML strings into DOM nodes, avoiding the use of `innerHTML` for security reasons. It provides a safe alternative for embedding dynamic HTML content into the DOM while offering configurable debugging capabilities for `console.log` and `console.warn`.

## Installation

To install AgnosticHTML using npm, run the following command:

```bash
npm install agnostic-html
```

## Usage

To use AgnosticHTML, import the `agnosticHTML` function and configure it to enable or disable debug messages. After configuration, you can safely insert HTML content into the DOM without using `innerHTML`.

### Example:

```javascript
import { agnosticHTML } from 'agnostic-html';

// Configure AgnosticHTML with debug options
window.agnosticHTML = agnosticHTML({ debugLog: true, debugWarn: true });

// Insert HTML content into a specific DOM element
window.agnosticHTML(
  \`
  <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">AgnosticHTML Button</button>
  \`,
  "#html-selector"
);
```

In this example, **AgnosticHTML** inserts a button into the element with the ID `#html-selector`. If the element does not exist, a warning will be shown in the console, depending on the debug settings.

### Default Target (without specifying a container):

If you don't specify a custom container (e.g., `#html-selector`), the content will be inserted into the `<body>` element by default:

```javascript
// Insert HTML content into the <body> element by default
window.agnosticHTML(
  \`
  <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">AgnosticHTML Button</button>
  \`
);
```

## Disable Warns and/or Logs

AgnosticHTML allows you to control the appearance of `console.log` and `console.warn` messages through optional flags. You can enable or disable these messages as needed using the following options:

- `debugLog`: Controls the appearance of informational messages (`console.log`). It can be set to `true` or `false`.
- `debugWarn`: Controls the appearance of warning messages (`console.warn`). It can be set to `true` or `false`.

By default, both flags are disabled.

### Example usage:

Show only warns on console:
```javascript
window.agnosticHTML = agnosticHTML({ debugLog: false, debugWarn: true });
```

Show only debug messages on console:
```javascript
window.agnosticHTML = agnosticHTML({ debugLog: true, debugWarn: false });
```

Doesn't show any message:
```javascript
window.agnosticHTML = agnosticHTML({ debugLog: false, debugWarn: false });
```

## License

AgnosticHTML is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Issues

If you encounter any issues, feel free to report them [here](https://github.com/BansheeDevelopment/AgnosticHTML/issues).
