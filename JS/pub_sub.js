function customFn1() {
  console.log("customFn1");
}
function customFn2() {
  console.log("customFn2");
}
function customFn3() {
  console.log("customFn3");
}

class Events {
  constructor() {
    this.eventStack = new Map();
  }

  // 登録
  on(type, fn) {
    const fnStack = this.eventStack.get(type) || new Set();
    fnStack.add(fn);
    this.eventStack.set(type, fnStack);
  }

  // 解除
  off(type, fn) {
    const fnStack = this.eventStack.get(type);
    if (fnStack && fnStack.has(fn)) {
      fnStack.delete(fn);
    }
  }

  // 購読
  emit(type) {
    const fnStack = this.eventStack.get(type);
    if (fnStack) {
      for (const fn of fnStack) fn();
    }
  }
}

const events = new Events();

// on で[type + 関数]を登録, off で登録した[type + 関数]をsubscribe
events.on("beforeInit", customFn1);
events.on("beforeInit", customFn2);
// events.off("beforeInit", customFn1);
events.on("afterInit", customFn3);

// console.log(events);

class MyLibrary {
  constructor() {
    events.emit("beforeInit");
    console.log("library process");
    events.emit("afterInit");
  }

  method() {
    // do something
  }
}

new MyLibrary();

// emitにより on で登録した関数をすべて実行する
// 以下が出力結果となるようにする
// customFn1
// customFn2
// library process
// customFn3
