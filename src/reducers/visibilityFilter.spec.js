import visibilityFilter from './visibilityFilter';

describe('Reducer: visibilityFilter', () => {
  it('should handle initial state', () => {
    expect(
      visibilityFilter(undefined, {})
    ).toEqual('SHOW_ALL');
  });

  it('should handle SET_VISIBILITY_FILTER', () => {
    expect(
      visibilityFilter([],
      {
        type: 'SET_VISIBILITY_FILTER',
        filter: 'SHOW_ACTIVE',
      })
    ).toEqual('SHOW_ACTIVE');

    expect(
      visibilityFilter([],
      {
        type: 'SET_VISIBILITY_FILTER',
        filter: 'SHOW_COMPLETED',
      })
    ).toEqual('SHOW_COMPLETED');

    expect(
      visibilityFilter([],
      {
        type: 'SET_VISIBILITY_FILTER',
        filter: 'SHOW_ALL',
      })
    ).toEqual('SHOW_ALL');
  });
});
