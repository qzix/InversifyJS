import { expect } from 'chai';

import { Container } from '../../index';

describe('Issue 1518', () => {
  it('should not throw on deactivating undefined singleton values', () => {
    const container: Container = new Container();
    const symbol: symbol = Symbol.for('foo');
    container.bind(symbol).toConstantValue(undefined);

    console.log(container.get(symbol));

    container.unbindAll();

    expect(() => {}).not.to.throw();
  });
});
