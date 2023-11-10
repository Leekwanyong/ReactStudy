export function personReducer(person, action) {
  switch (action.type) {
    case 'update': {
      const { name, current } = action
      return {
        ...person,
        // ...perosn.mentor.map으로 안하는 이유는 map으로 이미 풀고 있기 떄문이다.
        mentor: person.mentor.map((mentor) => {
          if (mentor.name === name) {
            return { ...mentor, name: current }
          }
          return mentor
        }),
      }
    }
    case 'add': {
      const { name, title } = action
      return {
        ...person,
        mentor: [...person.mentor, { name, title }],
      }
    }
    case 'delete': {
      const { name } = action
      return {
        ...person,
        mentor: [...person.mentor.filter((ment) => ment.name !== name)],
      }
    }
    default:
      throw new Error('Error: Unknown action')
  }
}
