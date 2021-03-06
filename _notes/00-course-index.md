## 第1章 课程导学
对课程整体进行讲解。

 1-1 课程导学试看

## 第2章 基础知识 React API 一览
React主要API介绍，在这里你能了解它的用法，为下一章源码分析打基础。

 2-1 准备工作试看
 2-2 JSX到JavaScript的转换
 2-3 react-element
 2-4 react-component
 2-5 react-ref
 2-6 forward-ref
 2-7 context
 2-8 concurrent-mode
 2-9 suspense-and-lazy
 2-10 hooks
 2-11 children
 2-12 others

## 第3章 React中的更新
主要讲解React创建更新中的主要两种方式ReactDOM.render和setState，他们具体做了什么。

 3-1 react-dom-render试看
 3-2 react-fiber-root
 3-3 react-fiber
 3-4 react-update-and-updateQueue
 3-5 react-expiration-time
 3-6 different-expirtation-time
 3-7 react-setState-forceUpdate

## 第4章 Fiber Scheduler
创建更新之后，找到Root然后进入调度，同步和异步操作完全不同，实现更新分片的性能优化。

 4-1 总结流程概览
 4-2 scheduleWork
 4-3 requestWork
 4-4 batchedUpdates
 4-5 reactScheduler（1）
 4-6 reactScheduler（2）
 4-7 reactScheduler（3）
 4-8 reactScheduler（4）
 4-9 performWork
 4-10 renderRoot
 4-11 最后补充

## 第5章 各类组件的Update
讲解10多种不同类型的组件的更新过程，以及如何遍历节点形成新的Fiber树

 5-1 入口和优化
 5-2 FunctionalComponent的更新
 5-3 reconcilerChildren
 5-4 reconcilerChildren-array
 5-5 updateClassComponent
 5-6 ClassComponent的更新
 5-7 IndeterminateComponent组件类型和其更新过程
 5-8 HostRoot的更新
 5-9 HostComponent和HostText的更新
 5-10 Poratl组件的更新
 5-11 ForwardRef的更新
 5-12 Mode组件的更新
 5-13 Memo组件的更新

## 第6章 完成节点任务
完成节点更新之后完成节点的创建，并提供优化到最小幅度的DOM更新列表

 6-1 completeUnitOfWork的整体流程和意义
 6-2 重设childExpirationTime
 6-3 completWork具体做了什么
 6-4 初次渲染中completeWork对于DOM节点的创建和appendAllChild算法
 6-5 初次渲染中如何进行DOM节点属性初始化操作
 6-6 更新DOM时进行的diff判断
 6-7 completeWork阶段对于HostText的更新
 6-8 renderRoot中对于错误的处理
 6-9 unwindWork以及React中的错误处理

## 第7章 commitRoot
根据更新列表最小幅度的改变DOM，实现UI的更新。

 7-1 commitRoot的总体工作内容
 7-2 invokeGuardedCallback开发时的帮助方法
 7-3 commitRoot第一个操作-获取快照
 7-4 commitAllHostEffects总体做了哪些事情
 7-5 commitPlacement插入新的子节点的操作
 7-6 commitWork更新节点属性的过程
 7-7 commitWork删除节点的操作过程
 7-8 commitLifecycles调用生命周期方法

## 第8章 功能详解：基础
各种贯穿于更新和提交阶段的功能，他们在哪里发挥作用，又是如何实现功能的

 8-1 context-stack
 8-2 遗留context-api的实现过程（1）
 8-3 遗留context-api的实现过程（2）
 8-4 新context的实现
 8-5 ref的实现过程
 8-6 hydrate-是否需要hydrate的判断
 8-7 hydrate-更新开始判断节点是否可以hydrate
 8-8 hydrate-再completeWork中复用可hydrate的节点
 8-9 event事件系统初始化-注入平台事件插件
 8-10 event事件监听的过程
 8-11 event-事件触发的过程
 8-12 event-事件对象的生产过程
 8-13 event查漏补缺

## 第9章 suspense and priority
Suspense作为下一个React的杀手功能，他又是如何实现异步渲染的呢？

 9-1 优先级和任务挂起的含义（1）
 9-2 优先级和任务挂起的含义（2）
 9-3 两个expirationTime的不同作用
 9-4 Suspense组件同步模式下的更新
 9-5 Suspense组件同步渲染模式补充
 9-6 Suspense组件异步模式下的更新
 9-7 retrySuspendedWork所做的事情

## 第10章 功能详解：Hooks
Hooks颠覆原先的React组件开发模式，提供更小粒度的更新以及更加适合解耦的API。

 10-1 什么是Hooks以及他的用法
 10-2 Hooks的定义以及执行前后的准备和重置
 10-3 useState的实现原理和注意事项（1）
 10-4 useState的实现原理和注意事项（2）
 10-5 useEffect和useLayoutEffect的实现原理和区别
 10-6 其他Hooks的实现

## 第11章 课程总结
对课程整体进行回顾，以及总结。

 11-1 课程总结