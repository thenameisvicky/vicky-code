export class TreeNode<T> {
  value: T;
  left: TreeNode<T> | null;
  right: TreeNode<T> | null;

  constructor(val: T) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

export class Heap<T> {
  public data: T[];
  public compare: (a: T, b: T) => number;

  // Class constructor
  constructor(compareFn: (a: T, b: T) => number) {
    this.data = [];
    this.compare = compareFn;
  }

  insert(element: T): void {
    this.data.push(element);
    this.bubbleUp(this.data.length - 1);
  }

  peek(): T {
    return this.data[0];
  }

  remove(element: T): void {
    const index = this.data.findIndex((elem) => elem === element);
    if (index === -1) return;

    const last = this.data.pop();
    if (index < this.data.length && last) {
      this.data[index] = last;
      this.bubbleUp(index);
      this.bubbleDown(index);
    }
  }

  poll(): T | undefined {
    if (this.data.length === 0) return undefined;
    const root = this.data[0];
    const last = this.data.pop();

    if (this.data.length > 0 && last) {
      this.data[0] = last;
      this.bubbleDown(0);
    }

    return root;
  }

  size(): number {
    return this.data.length;
  }

  private bubbleUp(index: number): void {
    while (index > 0) {
      const parent = Math.floor((index - 1) / 2);
      if (this.compare(this.data[index], this.data[parent]) < 0) {
        [this.data[index], this.data[parent]] = [
          this.data[parent],
          this.data[index],
        ];
        index = parent;
      } else {
        break;
      }
    }
  }

  private bubbleDown(index: number): void {
    const length = this.data.length;
    while (true) {
      const leftIndex = index * 2 + 1;
      const rightIndex = index * 2 + 2;
      let effecientIndex = index;

      if (
        leftIndex < length &&
        this.compare(this.data[leftIndex], this.data[effecientIndex]) < 0
      ) {
        effecientIndex = leftIndex;
      }

      if (
        rightIndex < length &&
        this.compare(this.data[rightIndex], this.data[effecientIndex]) < 0
      ) {
        effecientIndex = rightIndex;
      }

      if (effecientIndex !== index) {
        [this.data[index], this.data[effecientIndex]] = [
          this.data[effecientIndex],
          this.data[index],
        ];
        index = effecientIndex;
      } else {
        break;
      }
    }
  }
}
