# CSS Custom Form Elements
Style radiobuttons and checkboxes with only CSS. 
## Example CSS Custom Radio
```HTML
<input type="radio" name="radio-group" class="css-custom-radio" id="radiobutton-1" />
<label for="radiobutton-1" class="css-custom-radio">Label text</label>
```
## Example CSS Custom Checkbox
**NB** The CSS for the checkbox uses the 'general sibling selector', `~`, instead of the 'adjacent sibling selector', `+`. This is because ASP.NET MVC CheckBoxFor renders a hidden input field between the checkbox and the label, causing the adjacent sibling selector to break in some browsers. The 'general sibling selector' is known to have problems with Android 4.3 and lower.

For non ASP.NET development environments, it should be safe to use the 'adjacent sibling selector'.
```HTML
<input type="checkbox" name="checkbox-group" class="css-custom-checkbox" id="checkbox-1" />
<label for="checkbox-1" class="css-custom-checkbox">Label text</label>
```
