import './styles/index.less'
import Icon from './components/icon'
import IconGroup from './components/icon-group'
import IconText from './components/icon-text'
import Button from './components/button'
import ButtonGroup from './components/button-group'
import Row from './components/grid/row'
import Col from './components/grid/col'
import Input from './components/form/input'


const components = {
  Icon,
  IconGroup,
  IconText,
  Button,
  ButtonGroup,
  Row,
  Col,
  Input
}

const install = function (Vue, opts = {}) {
  Object.keys(components).forEach((key) => {
    Vue.component(`by${key}`, components[key])
  })
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default install

export {
  Icon,
  IconGroup,
  IconText,
  Button,
  ButtonGroup,
  Row,
  Col
}