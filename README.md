# LASS website

This repository uses GitHub Pages and Jekyll. Routine content updates only require editing Markdown files; GitHub generates the HTML automatically after changes are pushed to the publishing branch.

## Files to edit

| Content | Markdown file |
| --- | --- |
| Home page | `index.md` |
| Research page | `research.md` |
| Publications | `publications.md` |
| Team page | `team.md` |
| Navigation labels and links | `_includes/navigation.md` |

The shared page shell is in `_layouts/default.html`, and typography/layout rules are in `style.css`. These normally do not need to be edited.

## Editing workflow

1. Open the relevant `.md` file in any text editor.
2. Edit the text using standard Markdown syntax.
3. Commit and push the changed file to GitHub.
4. GitHub Pages rebuilds the website automatically.

Keep the YAML block between the `---` lines at the top of each page. It supplies the title, description, and permanent URL.

## Optional local preview

Install the GitHub Pages dependencies once:

```bash
bundle install
```

A current Ruby 3.x installation is recommended for local preview. The macOS system Ruby is too old for current GitHub Pages dependencies; this does not affect GitHub's own hosted build.

Then start the local site:

```bash
bundle exec jekyll serve
```

Open `http://127.0.0.1:4000` in a browser.

Biography, research topics, appointments, education, publications, honors, and the portrait were adapted into English from Professor Zhao's [official BIT faculty profile](https://grd.bitzh.edu.cn/dsgl/dsfc/znkxyjs/de3b35feabf5490583cb7958a8a560e8.htm).
