# Currency converter

## Installation 😄

- Clone/download the project
- From the project directory, run`npm install` or`yarn install`

## Running 🚀️

- iOS:`npm run ios`/`yarn run ios`
- Android:`npm run android`/`yarn run android`

### User login credentials

- username `admin@admin.com`
- password `admin`

#### How to contribute?

- *Fork* a repository.
- *Cloning* a repository.
- Create a *branch*.
- Making the changes.
- *Add* & *Commit* the Changes
- *Push* the changes.
- Make a* Pull Request(PR)*
- furthermore, please check this [link](https://blog.usejournal.com/how-to-contribute-to-open-source-software-with-git-github-2b3be6e36c82)

### How do I update a GitHub forked repository?

In your local clone of your forked repository, you can add the original GitHub repository as a "remote". ("Remotes" are like nicknames for the URLs of repositories - `origin` is one, for example.) Then you can fetch all the branches from that upstream repository, and rebase your work to continue working on the upstream version. In terms of commands that might look like:

```
# Add the remote, call it "upstream":

git remote add upstream https://github.com/whoever/whatever.git

# Fetch all the branches of that remote into remote-tracking branches,
# such as upstream/master:

git fetch upstream

# Make sure that you're on your master branch:

git checkout master

# Rewrite your master branch so that any commits of yours that
# aren't already in upstream/master are replayed on top of that
# other branch:

git rebase upstream/master
```

If you don't want to rewrite the history of your master branch, (for example because other people may have cloned it) then you should replace the last command with `git merge upstream/master`. However, for making further pull requests that are as clean as possible, it's probably better to rebase.

---

If you've rebased your branch onto `upstream/master` you may need to force the push in order to push it to your own forked repository on GitHub. You'd do that with:

```
git push -f origin master
```

You only need to use the `-f` the first time after you've rebased.


## styled-components

`styled-components` is integrated 😄

## Jest test 🚀️

* `yarn run test` for tests
* `yarn run test --coverage` with coverage

| File | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s |
| - | - | - | - | - | - |
| All files | 77.23 | 51.06 | 54.21 | 79.03 |   |
| jest | 88.89 | 100 | 66.67 | 88.89 |   |
| assetsTransformer.js | 66.67 | 100 | 0 | 66.67 | 5 |
| testUtils.js | 100 | 100 | 100 | 100 |   |
| src | 100 | 50 | 100 | 100 |   |
| constants.js | 100 | 50 | 100 | 100 | 6 |
| src/App | 87.5 | 50 | 75 | 86.67 |   |
| connect.js | 100 | 100 | 100 | 100 |   |
| index.js | 84.62 | 50 | 66.67 | 84.62 | 17-18 |
| src/ContextUtils | 100 | 100 | 100 | 100 |   |
| ConversionContext.js | 100 | 100 | 100 | 100 |   |
| ThemeContext.js | 100 | 100 | 100 | 100 |   |
| connect.js | 100 | 100 | 100 | 100 |   |
| src/components/ConversionInput | 100 | 100 | 100 | 100 |   |
| index.js | 100 | 100 | 100 | 100 |   |
| styles.js | 100 | 100 | 100 | 100 |   |
| src/components/CustomStatusBar | 100 | 50 | 100 | 100 |   |
| index.js | 100 | 100 | 100 | 100 |   |
| styles.js | 100 | 50 | 100 | 100 | 5 |
| src/components/HeaderBar | 100 | 100 | 100 | 100 |   |
| index.js | 100 | 100 | 100 | 100 |   |
| styles.js | 100 | 100 | 100 | 100 |   |
| src/components/KeyboardSpacer | 64 | 33.33 | 50 | 64 |   |
| index.js | 62.5 | 33.33 | 50 | 62.5 | 12-19,26-27,51 |
| styles.js | 100 | 100 | 100 | 100 |   |
| src/components/Logo | 100 | 100 | 100 | 100 |   |
| index.js | 100 | 100 | 100 | 100 |   |
| styles.js | 100 | 100 | 100 | 100 |   |
| src/components/ReverseButton | 100 | 100 | 100 | 100 |   |
| index.js | 100 | 100 | 100 | 100 |   |
| styles.js | 100 | 100 | 100 | 100 |   |
| src/components/RowItem | 100 | 50 | 75 | 100 |   |
| index.js | 100 | 50 | 66.67 | 100 | 17 |
| styles.js | 100 | 100 | 100 | 100 |   |
| src/redux | 100 | 100 | 100 | 100 |   |
| utility.js | 100 | 100 | 100 | 100 |   |
| src/redux/middleware | 100 | 100 | 100 | 100 |   |
| actions.js | 100 | 100 | 100 | 100 |   |
| src/redux/reducers/authentication | 60 | 100 | 14.29 | 60 |   |
| actionCreators.js | 0 | 100 | 0 | 0 | 5-11 |
| actions.js | 100 | 100 | 100 | 100 |   |
| selectors.js | 60 | 100 | 20 | 60 | 5,7,9,11 |
| src/redux/reducers/conversion | 61.54 | 40 | 41.67 | 65.96 |   |
| actionCreators.js | 60 | 100 | 20 | 100 |   |
| actions.js | 100 | 100 | 100 | 100 |   |
| index.js | 36.84 | 0 | 30 | 36.84 | 46,71-112 |
| selectors.js | 76.47 | 50 | 66.67 | 76.47 | 12,28-31 |
| src/redux/reducers/themes | 92.31 | 100 | 80 | 91.67 |   |
| actionCreators.js | 100 | 100 | 100 | 100 |   |
| actions.js | 100 | 100 | 100 | 100 |   |
| index.js | 75 | 100 | 0 | 75 | 17 |
| selectors.js | 100 | 100 | 100 | 100 |   |
| src/screens/CurrencyList | 54.55 | 16.67 | 40 | 53.13 |   |
| connect.js | 100 | 100 | 100 | 100 |   |
| index.js | 46.43 | 16.67 | 25 | 46.43 | 46-98 |
| styles.js | 100 | 100 | 100 | 100 |   |
| src/screens/Home | 80.77 | 55.56 | 37.5 | 84 |   |
| index.js | 78.26 | 55.56 | 28.57 | 81.82 | 59-106 |
| styles.js | 100 | 100 | 100 | 100 |   |
| src/screens/Login | 57.69 | 41.67 | 40 | 60.87 |   |
| connect.js | 100 | 100 | 100 | 100 |   |
| index.js | 47.62 | 41.67 | 25 | 52.63 | 33,52-69 |
| styles.js | 100 | 100 | 100 | 100 |   |
| src/screens/Options | 92.86 | 100 | 75 | 92.31 |   |
| connect.js | 100 | 100 | 100 | 100 |   |
| index.js | 88.89 | 100 | 50 | 88.89 | 27 |
| styles.js | 100 | 100 | 100 | 100 |   |
| src/screens/Themes | 93.33 | 75 | 80 | 92.86 |   |
| connect.js | 100 | 100 | 100 | 100 |   |
| index.js | 90 | 75 | 66.67 | 90 | 31 |
| styles.js | 100 | 100 | 100 | 100 |   |
| src/utils | 68.18 | 58.82 | 25 | 78.95 |   |
| getStatusBarHeight.js | 68.18 | 58.82 | 25 | 78.95 | 17-18,22-23 |

## e2e test with detox ✈️

- iOS:`detox build -c ios` and`detox test -c ios`
- Android:`detox build -c android` and`detox test -c android`

| iOS | Android |
| - | - |
| [Imgur](https://i.imgur.com/ip78nXf.mp4) | [Imgur](https://i.imgur.com/p8fWjnw.mp4) |

## Storybook 📖

* `yarn run storybook` for start storybook
* `yarn run prestorybook` for collect all stories

