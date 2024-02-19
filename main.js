import './style.css'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
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
  </div>
`

setupCounter(document.querySelector('#counter'))
