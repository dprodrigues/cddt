import { Flex } from '@radix-ui/themes'
import Note from './note'
import Task from './task'

export default function List({ type, items }) {
  const Item = type === 'notes' ? Note : Task

  return (
    <Flex direction="column">
      {items.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </Flex>
  )
}
