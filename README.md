# vue-awesome-pull-refresh
[![Build Status](https://www.travis-ci.org/flitrue/vue-awesome-pull-refresh.svg?branch=master)](https://www.travis-ci.org/flitrue/vue-awesome-pull-refresh)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fflitrue%2Fvue-awesome-pull-refresh.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fflitrue%2Fvue-awesome-pull-refresh?ref=badge_shield)

> A pull down refresh component implements by vuejs 2.0 for mobile.

## Demo

[Demo](https://flitrue.github.io/vue-awesome-pull-refresh)

PS: Please use browsers that support Promise

## Usage

### Install

```bash
npm install vue-awesome-pull-refresh --save
```

### CommonJS

```javascript
var VuePullRefresh = require('vue-awesome-pull-refresh');

new Vue({
    components: {
        'vue-pull-refresh': VuePullRefresh
    },
    data: function () {
        return {};
    },
    methods: {
        onRefresh: function() {
            return new Promise(function (resolve, reject) {
                setTimeout(function () {
                    resolve();
                }, 1000);
            });
        }
    },
    template: '<vue-pull-refresh :on-refresh="onRefresh"></vue-pull-refresh>'
});
```

### ES6
```javascript
import VuePullRefresh from 'vue-awesome-pull-refresh';

new Vue({
    components: {
        'vue-pull-refresh': VuePullRefresh
    },
    data: function () {
        return {};
    },
    methods: {
        onRefresh: function() {
            return new Promise(function (resolve, reject) {
                setTimeout(function () {
                    resolve();
                }, 1000);
            });
        }
    },
    template: '<vue-pull-refresh :on-refresh="onRefresh"></vue-pull-refresh>'
});
```

### Props
| Property | Description |
|:--|:--|
| onRefresh | refresh event;Should return a promise. |
| config | {<br>errorLabel: label shows when error<br>startLabel: label shows when pull down start<br>readyLabel: label shows when ready to refresh<br>loadingLabel: label shows when loading<br>pullDownHeight: the height toggle pull down refresh action<br>} |

## Contribution
First, install dependencies
```
npm install
```
Second, setup development environment
```
npm run dev
```

## License

[MIT](http://opensource.org/licenses/MIT)


[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fflitrue%2Fvue-awesome-pull-refresh.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fflitrue%2Fvue-awesome-pull-refresh?ref=badge_large)