import Promise from '@/promise'
import props from 'p-props'

const all = Promise.all.bind(Promise)
export { props, all }
export default Promise
