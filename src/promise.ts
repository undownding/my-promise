import pProps from 'p-props'

export class MyPromise<T> implements Promise<T> {
  private readonly promise: Promise<T>

  constructor(
    executor: (
      resolve: (value: T | PromiseLike<T>) => void,
      reject: (reason?: any) => void,
    ) => void,
  ) {
    this.promise = new Promise<T>(executor)
    this.then = this.promise.then.bind(this.promise)
    this.catch = this.promise.catch.bind(this.promise)
    this.finally = this.promise.finally.bind(this.promise)
  }

  then: Promise<T>['then']
  catch: Promise<T>['catch']
  finally: Promise<T>['finally']

  // Symbol.toStringTag
  get [Symbol.toStringTag]() {
    return 'MyPromise'
  }

  // 静态方法
  static resolve = Promise.resolve

  static reject = Promise.reject

  static all = Promise.all

  static race = Promise.race

  static allSettled = Promise.allSettled

  static any = Promise.any

  static props: typeof pProps = pProps
}

// 独立的工具函数
export function all<T>(promises: Iterable<Promise<T> | T>): Promise<T[]> {
  return Promise.all(promises)
}

export const props = pProps
