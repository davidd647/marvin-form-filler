// Icon source: Marvin Robot by Creaticca Creative Agency from the Noun Project

let inputs = document.querySelectorAll('input')
let selects = document.querySelectorAll('select')
let textareas = document.querySelectorAll('textarea');

function fillTheThings(){
  inputs.forEach(input => {
    switch( input.type ) {
      case 'text':
        const items = [`sigh`, `why`, `what's the use`, `uughh`]
        input.value = items[Math.floor(Math.random()*items.length)]
        break
      case 'checkbox':
        input.checked = true
        break
      case 'email':
        input.value = `marvin@magrathea.com`
        break
      case 'tel':
        input.value = `647 424 2424`
        break
      case 'number':
        input.value = `42`
        break
    }
  })

  selects.forEach(select => {
    select.selectedIndex = 1
  })

  textareas.forEach(textarea => {
    textarea.value = `“What’s up?” asked Ford.
    “I don’t know,” said Marvin, “I’ve never been there.”`
  })
}

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      fillTheThings()
    }
  }
);