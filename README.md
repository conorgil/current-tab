Quick extension to explore the APIs that seem relevant to tracking the current tab:

* [onHighlighted](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/tabs/onHighlighted)
* [onUpdated](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/tabs/onUpdated)
* [onActivated](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/tabs/onActivated)

I did some quick tests by creating new tabs and clicking between existing tabs and windows.

I couldn't observe any difference between the `onHighlighted` and `onActivated` APIs, but then
I read the docs more clearly:

```
Firefox doesn't have the concept of highlighting multiple tabs, and so in Firefox highlighting is just an alias for tab activation. So this event will fire only when the active tab in a window changes, and the tabIds property of highlightInfo will always be an array of length one, with the tabId referring to the active tab.
```

This appears to be the same behavior in Chrome. I wonder what highlighting a tab even means...