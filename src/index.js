import printMe from './print'

async function getComponent(){
    const { default: _ } = await import('lodash')

    const element = document.createElement('div')
    const button = document.createElement('button')

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    
    button.innerHTML = 'Click me and check the console!'
    button.onclick = printMe
    element.appendChild(button)

    return element
}

getComponent()
    .then((component) => {
        document.body.appendChild(component)
    })