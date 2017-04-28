import todos from './todos';

describe('Reducer: todos', () => {
  it('should handle initial state', () => {
    expect(
      todos(undefined, {})
    ).toEqual([]);
  });

  it('should handle ADD_TODO', () => {
    // state.length === 0
    expect(
      todos(
        [],
        {
          type: 'ADD_TODO',
          id: 0,
          text: 'First',
        }
      )
    ).toEqual([
      {
        id: 0,
        text: 'First',
        isCompleted: false,
      }
    ]);

    // state.length === 1
    expect(
      todos(
        [
          {
            id: 0,
            text: 'First',
            isCompleted: false,
          }
        ],
        {
          type: 'ADD_TODO',
          id: 1,
          text: 'Second',
        }
      )
    ).toEqual([
      {
        id: 0,
        text: 'First',
        isCompleted: false,
      }, {
        id: 1,
        text: 'Second',
        isCompleted: false,
      }
    ]);

    // state.length === 2
    expect(
      todos(
        [
          {
            id: 0,
            text: 'First',
            isCompleted: false,
          },
          {
            id: 1,
            text: 'Second',
            isCompleted: false,
          }
        ],
        {
          type: 'ADD_TODO',
          id: 2,
          text: 'Third',
        }
      )
    ).toEqual([
      {
        id: 0,
        text: 'First',
        isCompleted: false,
      },
      {
        id: 1,
        text: 'Second',
        isCompleted: false,
      },
      {
        id: 2,
        text: 'Third',
        isCompleted: false,
      }
    ]);
  });

  it('should handle TOGGLE_TODO', () => {
    expect(
      todos(
        [
          {
            id: 0,
            text: 'First',
            isCompleted: false,
          },
          {
            id: 1,
            text: 'Second',
            isCompleted: false,
          }
        ],
        {
          type: 'TOGGLE_TODO',
          id: 1,
        }
      )
    ).toEqual([
      {
        id: 0,
        text: 'First',
        isCompleted: false,
      },
      {
        id: 1,
        text: 'Second',
        isCompleted: true,
      }
    ]);
  });
});
