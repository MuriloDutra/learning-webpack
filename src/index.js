import print from './print'

async function getComponent(){
    const { default: _ } = await import('lodash')
    const element = document.createElement('div')

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.onclick = print.bind(null, 'Hello Webpack!!!');

    return element
}

getComponent()
    .then((component) => {
        document.body.appendChild(component)
    })