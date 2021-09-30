/**
 * Created by WebStorm.
 * User: 高俊东
 * Date: 9/30/21
 * Time: 9:28 AM
 */
import components from './components'


/**
 * 组件名称前缀
 * @type {string}
 */
const prefixName = 'gui-'

/**
 * 组件新增install 方法
 * @param component 组件实例
 */
const createInstall = component => {
  component.install = app => app.component(`${prefixName}${component.name}`, component)
}

/**
 * 为组件添加 install 方法 用于 按需引入
 */
components.forEach(createInstall)

/**
 * 全部引入
 * @returns {Function}
 */
export const installAll = () => {
  return app => {
    components.forEach(component => {
      app.use(component)
    })
  }
}
