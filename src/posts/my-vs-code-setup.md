---
title: My Visual Studio Code Setup
tags: ["VSCode", "text editor", "code"]
path: "/vs-code-setup"
date: "2018-07-17"
cover: "/vs-code/text-editor-header.png"
published: true
---

I _love_ the text editor setup I've been using for the past year and a half, so I want to show off my setup! Visual Studio Code has far surpassed my experiences with Atom, Spyder, Sublime Text, Emacs, and Idle (the built-in Python editor) which I used for the years before it. I thought I would do a quick write up on my setup and the extensions I love!

## Theme

Since I teach people how to code professionally and give a lot of talks on programming, having a readable theme is super important to me. I also love to have a theme that I enjoy aesthetically, so usually something with a lot of girly colors.

Those criteria being set, my two absolute favorite themes are [Fairy Floss](https://marketplace.visualstudio.com/items?itemName=nopjmp.fairyfloss) and [Dracula](https://draculatheme.com/visual-studio-code/).

#### Fairy Floss

![Fairy Floss](/vs-code/fairy-floss.png)

#### Dracula

![Dracula](/vs-code/dracula.png)

## Font

I am a long-term FiraCode loyalist (pre-dating VS Code!); I like the ligatures that make my code more readable at a glance. [It's pretty easy to set up too, which is really nice!](https://github.com/tonsky/FiraCode/wiki/VS-Code-Instructions)

![The Fira Code Font](/vs-code/fira-code.png)

## Save Configuration

Another key piece of my setup is my save configuration. The first thing that I love is autosave, which you can turn on via the `file` drop-down. I have it further configured so that whenever I pause when writing code, my code is saved automatically without me doing anything. I cannot explain how helpful this is for live coding and for beginners.

```js
// in settings.json
"files.autoSave": "afterDelay",
"files.autoSaveDelay": 100,
```

In the same vein, I have [Prettier](https://github.com/prettier/prettier-vscode) set up to format my code on `cmd + s`. Ideally, this would run automatically as well, but it is close enough for now. I used [StandardJS](https://github.com/standard/vscode-standardjs) to do the same for a while, before moving over to a pro-semi-colon client.

```js
// in settings.json
"editor.formatOnSave": true,
```

I use two spaces for most language indentation, the only exception is Python, where I use four spaces by default.

```js
// in settings.json
"[python]": {
    "editor.insertSpaces": true,
    "editor.tabSize": 4
},
```

## Emmet

I am incredibly reliant on [Emmet](https://emmet.io/), so I love that it is built in for VS Code. I also have it set up to work in more than just my html files:

```js
// in settings.json
"emmet.includeLanguages": {
  "html": "html",
  "erb": "erb",
  "javascript": "javascriptreact",
  "vue": "html",
  "ejs": "html"
},
```

## Integrated Terminal

I will write a longer post on my terminal set up at some point, but I use ITerm with ZShell on my Mac, and so I have VS Code's integrated terminal set up to use that setup.

```js
// in settings.json
"terminal.external.osxExec": "iTerm.app",
"terminal.integrated.shell.osx": "zsh",
```

## Extensions

I have a lot of language and framework-specific extensions built-in, which are boring and very dependent on the developer, so I will skip over those in order to discuss some of my favorite all-purpose extensions.

1.  [VS Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare) - this extension is straight up magical, and I truly believe it will change code education and pair programming in the near future. It allows developers to Google Doc-style collaborate on the same file on different computers. You can even open up access to your localhost ports across machines and share terminal sessions. There are some bugs, especially on Windows machines, but it's so cool that it doesn't even matter!

1.  [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker) - I write a lot of Markdown and page content directly in my text editor, and I definitely have some spelling issues. I love this extension for underlining my mistakes and offering suggestions, even when I'm offline.

1.  [Import Cost](https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost) - this one is more a "nice to have" rather than a necessary, but it shows the size of the npm packages I am importing in my projects.

1.  [HTMLHint](https://marketplace.visualstudio.com/items?itemName=mkaufman.HTMLHint) - I use this for live HTML validation directly in my editor. No more having to run the W3C validator on every change!

1.  [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens) - GitLens shows Git blame annotations and author highlighting within documents. Its really helpful for working on multi-author projects!

1.  [CodeRunner](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner) - this extension allows you to press a play button to run your code directly within VSCode with no terminal interaction needed! Especially helpful for new programmers.

1.  [EmojiSense](https://marketplace.visualstudio.com/items?itemName=bierner.emojisense) - I love Slack's emoji-autofill post `:` feature, and this extension allows you to do the same in VSCode!

## Conclusion

I am really happy with my setup -- I have no complaints! Feel free to [tweet](https://twitter.com/aspittel) me any questions about my setup, and also send me your favorite tips and tricks!
