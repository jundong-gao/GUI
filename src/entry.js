/**
 * Created by WebStorm.
 * User: 高俊东
 * Date: 9/29/21
 * Time: 3:46 PM
 */

import { installAll }  from './install'
import components from './components'


/**
 * 组件库名称 GUI
 * @type
 */
const GUI = {
  ...components,
  install: installAll()
}

export default GUI
