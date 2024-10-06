/**
 * AgnosticHTML 0.4.0 Type Definitions by Banshee Development
 * MIT License
 *
 * A utility function that safely parses HTML strings into DOM nodes,
 * avoiding the use of innerHTML for security reasons.
 * Now with configurable debugging capabilities (log/warn) similar to AgnosticRun.
 */

interface AgnosticHTMLConfig {
  debugLog?: boolean;
  debugWarn?: boolean;
}

type ParseHTMLToDOM = (htmlString: string, targetSelector?: string) => DocumentFragment | void;

export function agnosticHTML(config?: AgnosticHTMLConfig): ParseHTMLToDOM;
