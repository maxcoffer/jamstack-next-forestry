import * as React from 'react'
import ListItem from './ListItem'
import { BlogPost } from '../interfaces'

type Props = {
  items: BlogPost[]
}

const List = ({ items }: Props) => (
  <ul className="grid max-w-sm gap-5 mb-8 lg:grid-cols-3 sm:mx-auto lg:max-w-full">
    {items.map((item) => (
      <li key={item.id} className="px-10 py-20 text-center border rounded lg:px-5 lg:py-10 xl:py-20">
        <ListItem data={item} />
      </li>
    ))}
  </ul>
)

export default List
