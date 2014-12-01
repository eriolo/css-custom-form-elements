# CSS Custom Form Elements
Customize radiobuttons and checkboxes with CSS. The solution in this example fullfills the following requirements:
- Non JavaScript
- Accessible, i.e. works with keyboard
- Semantically correct, i.e. validated with http://validator.w3.org/
- Layout does not break when label text span over multiple rows
- The icon should not be a child element of the label, since this will cause usability problems on mobile devices
## Example CSS Custom Radio
Fiddle [http://jsfiddle.net/eriolo/3tcx5ym2/3/](http://jsfiddle.net/eriolo/3tcx5ym2/3/)
```HTML
<input type="radio" name="radio-group" class="css-custom-radio" id="radiobutton-1" />
<label for="radiobutton-1" class="css-custom-radio">Label text</label>
```
## Example CSS Custom Checkbox
Fiddle [http://jsfiddle.net/eriolo/Lyz8b185/3/](http://jsfiddle.net/eriolo/Lyz8b185/3/)

**NB** The CSS for the checkbox uses the 'general sibling selector', `~`, instead of the 'adjacent sibling selector', `+`. This is because ASP.NET MVC CheckBoxFor renders a hidden input field between the checkbox and the label, causing the adjacent sibling selector to break in some browsers. The 'general sibling selector' is known to have problems with Android 4.3 and lower. For non ASP.NET development environments, it should be safe to use the 'adjacent sibling selector'. The 'adjacent sibling selector' is CSS2.1 and the 'general sibling selector' is CSS3.
```HTML
<input type="checkbox" name="checkbox-group" class="css-custom-checkbox" id="checkbox-1" />
<label for="checkbox-1" class="css-custom-checkbox">Label text</label>
```
