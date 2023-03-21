# Ellegant CSS microframework

Ellegant is a CSS framework that aims to provide user interaction with very little or no Javascript at all.

With inputs and labels, Ellegant targets elements providing a fast and clean user experience even on low-end mobile devices.

See it in action [here](https://ellegantcss.github.io/ellegant/).
<hr>

### How? 🤯
By using inputs and labels we can take advantage of selectors like `+` and `~`
to target the elements after the right `input:checked`. This is why the HTML may look
just a little verbose, while the page remains fast and clean even when running on low-end mobile devices.

You already use CSS to change how elements are shown inside your JS code.
Ellegant goes one step further and removes the JS code.


### Why? 🙄
We've been using many Javascript codes that we could replace with clever CSS selectors to replicate its function.

With this kind of no-JS component, you may use your Javascript code to do more complex interactions with less fear of jamming your user experience.

That is what we are talking about.

## How to use

You may include Ellegant's CSS and optional JS file using those public CDN URL:

`<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/ellegant/ellegant@master/ellegant.min.css">`

`<script src="https://cdn.jsdelivr.net/gh/ellegant/ellegant@master/ellegant.js"></script>`

## How to contribute
Help develop Ellegant by writing code!

It is important to note that we use [Dart Sass](https://sass-lang.com/dart-sass) to transform `SCSS` into `CSS` so we only write SCSS and JS. This can be achieved with the [vscode-dartsass](https://github.com/irispixel/vscode-dartsass) extension.

1. Fork our repository <a href="https://github.com/ellegantcss/ellegant" target="_blank">here</a>;
1. Make your changes to `ellegant.scss` and/or `ellegant.js` and push them to your repo;
1. Submit your pull request; *Instructions on how to do that are [here](https://docs.github.com/pt/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork)*
1. Be respectful and explain what you meant to fix, implement or improve in your pull request. *The better you explain what you did, the better we can together explain it to the world.*