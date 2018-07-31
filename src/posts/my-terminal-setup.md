---
title: "My Terminal Setup: iTerm + Zsh"
tags: ["terminal", "iterm", "zsh", "zshell"]
path: "/terminal-setup"
date: "7/31/2018"
cover: "/terminal-header.png"
published: true
---
As a follow up to my [post](https://zen-of-programming.com/vs-code-setup/) on my text editor setup, I wanted to write about the other key part of my development setup -- my terminal. Unlike my relatively new text editor setup, my terminal configuration has followed me around for years -- spanning over multiple jobs and even more computers. It's the first thing I get set up on when I get a new computer

# The Terminal

I use iTerm2 for my Terminal emulator. It has some really cool features, like search, autocomplete, and paste history. That being said, the feature that makes it a complete must have for me is the split panes. 

![My Terminal](terminal.png)

When I do web development work, I usually have panes open for my server session and for running other commands as necessary. When running many processes at a time, as was required at my old job, I would easily have 10 panes open at a time

![Lot's of sessions](lots-of-sessions.png)

You can use the shortcut `cmd + d` for a new pane horizontally, and `cmd + shift + d` for a new vertical pane.

![my terminal colors](color-settings.png)

I do have some tweaks to the color palette that I use -- I think the biggest is that my default font is pink (the forefront color).

Other than that, most of the "magic" comes from my shell, Zsh!

# The Shell

For my shell, the programming language the command line uses, I use Zsh instead of Bash. 

There are some pros and cons of using Zsh, the biggest drawback I've found is some difficulty installing certain software. This was a big learning curve at first, but over time I've gotten used to common stumbling blocks and don't have as many problems. Taking this into account, I would only recommend Zsh for experienced shell users!

That being said, the pros for me far outweigh the cons. The tab completion is much better in Zsh as compared to Bash. It even has tab completion for Git! 

[Oh My Zsh](https://github.com/robbyrussell/oh-my-zsh) is a framework for managing your Zsh configuration, and it is a must download. When I refer to Zsh, a lot of the features are actually a part of Oh My Zsh.

![](tab-completion.png)

## My .zshrc

Instead of a `.bash_profile`, Zsh primarily uses a `.zshrc` file where your customizations are saved. By default, there are a bunch of comments explaining different settings in that file. I am going to go through some of my settings below.

Zsh has awesome themes, which change the appearance of your prompt. 

![](prompt.png)

I use [Spaceship](https://github.com/denysdovhan/spaceship-prompt) which displays a bunch of excellent information. For example, in the directory for my blog, which is a node app, my git branch, the git status, the package version, and the current Node version display. Also, it shows the amount of time the previous command took to run and the computer battery percentage if it is low! This changes slightly from directory to directory, but its really nice to have this information so accessible, especially compared to how difficult it can be to create something similar in a Bash environment.

I am always switching on and off the auto-correct built into Zsh. Right now I have it turned on, but it does sometimes annoy me.

```bash
ENABLE_CORRECTION="true"
```

Another excellent Zsh feature is plugins. These make Zsh have better autocomplete for different languages or add additional features to the shell. I especially recommend the `git` plugin -- it's what gives you tab completion for git! I also really like `zsh-syntax-highlighting`. It highlights valid commands green and invalid ones red, so you don't even have to test the command to see if it will work!

```bash
plugins=(git node bundler osx rake ruby python javascript bash zsh-syntax-highlighting)
```

After that, I have boring PATH and git configuration, so I'm going to leave that out.

Finally, we get to my aliases and custom functions. My guilty pleasure function that isn't great practice is entitled "acp". "acp" adds, commits, and pushes my code, and it looks like this:

```bash
function acp() {
  git add .
  git commit -m "$1"
  git push
}
```

I use it way too much, but it really speeds things up when I'm working on personal projects.

I have two custom aliases setup:

```bash
alias groups="python ~/wdi/groupr/groupr.py"
alias zen="gatsby build && surge public/ zen-of-programming.com"
```

The first creates random groups of my students for in-class activities and projects. Zen deploys my personal site. Yes, I only have two custom aliases; however, that is just because so many are built into Oh My Zsh!

Some built-in ones I rely on especially hard are "..." which is an alias for "cd ../..". You can keep adding periods and keep moving back in directories. You can also omit "cd" and just type the file name to change from one directory to another -- "blog" is equivalent to "cd blog." There are also other aliases built in to do almost anything you could dream of with git. I also enjoy `please=sudo`, even though I don't personally use it!

Another bonus utility I have on my computer is `tree` (which you can install on a Mac with `brew install tree`). This lists the folders and files in a directory in a really nice way.

![file tree](tree.png)

## Stay in touch!

If you liked this article and want to read more, I have a [weekly newsletter](https://tinyletter.com/ali_writes_code) with my favorite links from the week and my latest articles. Also, [tweet](https://twitter.com/aspittel) me a picture of your terminal setup!
