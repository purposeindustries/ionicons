# Ionicons

## About this fork

We generate js from each svg files.

In your app you can do:

```
import iosCardIcon from 'ionicons-svg/ios-card';

const div = document.createElement('div');
div.innerHTML = iosCardIcon;
document.body.appendChild(div);
```

If you want you can import all the svgs using:

```
const ionicons = require('ionicons-svg');

ionicons['ios-card'] === require('ionicons-svg'); // true
```

Generating screenshot:

```
montage -label '%f' src/*.svg -tile 6x -geometry '128x128x16x16' icons.jpg
```


Premium icons for [Ionic](http://ionicframework.com/). Designed by [@benjsperry](https://twitter.com/benjsperry).

Note: All brand icons are trademarks of their respective owners. The use of these trademarks does not indicate endorsement of the trademark holder by Drifty, nor vice versa.

Visit [ionicons.com](http://ionicons.com) and  check out the search feature, which has keywords identifying common icon names and styles. For example, if you search for “arrow” we call up every icon that could possibly be used as an arrow. We’ve also included each icon’s class name for easy copy/pasting when you’re developing!

We intend for this icon pack to be used with [Ionic](http://ionicframework.com/), but it’s by no means limited to it. Use them wherever you see fit, personal or commercial. They are free to use and licensed under [MIT](http://opensource.org/licenses/MIT).


## License

Ionicons is licensed under the [MIT license](http://opensource.org/licenses/MIT).
