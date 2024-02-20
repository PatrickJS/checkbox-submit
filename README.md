# checkbox-submit

[Edit in StackBlitz next generation editor ⚡️](https://stackblitz.com/~/github.com/PatrickJS/checkbox-submit)

```html
<form>
  <input
    type="checkbox"
    onchange="
      this
        .closest('form')
        .submit()
    ">
  </input>
</form>
```
