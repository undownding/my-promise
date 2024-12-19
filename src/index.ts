import props from 'p-props'
import { MyPromise } from '@/promise'

const all = Promise.all.bind(Promise)
export { props, all }
export default MyPromise
