import React from 'react'
import Link from 'next/link'

import { BlogPost } from '../interfaces'

type Props = {
  data: BlogPost
}

const ListItem = ({ data }: Props) => (
  <div className="block">
    <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">
      {data.date}
    </p>
    <Link href="/blog/[id]" as={`/blog/${data.id}`}>
      <a
        aria-label="Read post"
        className="inline-block max-w-xs mx-auto mb-3 text-2xl font-extrabold leading-7 transition-colors duration-200 hover:text-deep-purple-accent-400"
        title="Nori grape silver beet broccoli kombu beet"
      >
        {data.title}
      </a>
    </Link>
    <p className="max-w-xs mx-auto mb-2 text-gray-700">
      {data.content}
    </p>
    <Link href="/blog/[id]" as={`/blog/${data.id}`}>
      <a
        aria-label=""
        className="inline-flex items-center transition-colors duration-200 text-purple-600 hover:text-purple-800"
      >
        Read more
      </a>
    </Link>
  </div>
)

export default ListItem
