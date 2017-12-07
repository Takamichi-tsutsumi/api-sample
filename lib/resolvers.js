const items = [
  { id: '1', name: 'Skywalker', greet: 'I am Skywalker.' },
  { id: '2', name: 'Obione', greet: 'Master!!!!' },
  { id: '3', name: 'Yoda', greet: 'May the force be with you.' },
  { id: '4', name: 'Amidara', greet: 'I am a Queen.' },
]

export default {
  item: (params) => {
    return items.find((item) => { return item.id === params.id })
  },
  items: () => {
    return items
  },
  addItem: (params) => {
    const { name, greet } = params
    return { id: 'hola', name: name, greet: greet}
  }
}