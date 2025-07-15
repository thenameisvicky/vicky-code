export interface BaseSingleArrayExecutionStrategy {
  function: (nums: Array<number>, target?: number) => Promise<any>;
}

export class contextExecutor<T extends BaseSingleArrayExecutionStrategy> {
  private strategy: T;
  constructor(Strategy: T) {
    this.strategy = Strategy;
  }

  async execute(nums: Array<number>, target?: number): Promise<any> {
    return await this.strategy.function(nums, target);
  }
}
