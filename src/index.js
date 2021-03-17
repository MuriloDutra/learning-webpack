import _ from 'lodash'
import './style.css'
import imageLaLaLand from './LaLaLand.jpg'
import data from './data.xml'
import notes from './data.csv'
import toml from './data.toml'
import yaml from './data.yaml'
import json from './data.json5'

console.log(toml.title); // output `TOML Example`
console.log(toml.owner.name); // output `Tom Preston-Werner`

console.log(yaml.title); // output `YAML Example`
console.log(yaml.owner.name); // output `Tom Preston-Werner`

console.log(json.title); // output `JSON5 Example`
console.log(json.owner.name); // output `Tom Preston-Werner`

function component(){
    const element = document.createElement('div')

    element.innerHTML = _.join(['Hello', 'Webpack'], ' ')
    element.classList.add('hello')

    const myImage = new Image()
    myImage.src = imageLaLaLand

    element.appendChild(myImage)

    console.log(data)
    console.log(notes)
    
    return element
}


document.body.appendChild(component())