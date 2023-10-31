function getFirstName({ displayName, fullName: { firstName: fn } }) {
    return `${displayName} is ${fn}`
  }
  const students = {
    studentId: 64001,
    displayName: 'jsGuy',
    fullName: {
      firstName: 'Somchai',
      lastName: 'DeeJai'
    }
  }
  console.log(getFirstName(students))

  const person = [
    {id: 1,name:'Suda'},
    {id:2,name:'Surapong'},
    {id:3, name: 'Somchai'}
  ]

  function getPersonName([, { name }]) {
    return name
  }

  console.log(getPersonName(person))