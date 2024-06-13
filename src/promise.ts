import pProps from 'p-props'

export interface Deferred<T> {
  promise: MyPromise<T>
  resolve: (value?: T | PromiseLike<T>) => void
  reject: (reason?: any) => void
}

export default class MyPromise<T> extends Promise<T> {
  static deferred<T>(): Deferred<T> {
    const deferredResult = {
      promise: null,
      resolve: null,
      reject: null,
    }

    deferredResult.promise = new MyPromise((resolve, reject) => {
      deferredResult.resolve = resolve
      deferredResult.reject = reject
    })
    return deferredResult
  }

  static props: typeof pProps = pProps
}
