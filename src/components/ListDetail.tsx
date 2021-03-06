import * as React from 'react'

import { BlogPost } from '../interfaces'

type ListDetailProps = {
  item: BlogPost
}

const ListDetail = ({ item: post }: ListDetailProps) => (
  <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    <div className="mx-auto sm:text-center lg:max-w-2xl">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-gray-900 uppercase rounded-full bg-yellow-400">
            Brand new
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tigh sm:text-4xl md:mx-auto">
          <span className="relative inline-block text-purple-400">
            <svg viewBox="0 0 52 24" fill="currentColor" className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-10 lg:w-32 lg:-ml-16 lg:-mt-10 sm:block">
              <defs>
                <pattern id="5dc90b42-5ed4-45a6-8e63-2d78ca9d3d95" x="0" y="0" width=".135" height=".30" >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect fill="url(#5dc90b42-5ed4-45a6-8e63-2d78ca9d3d95)" width="52" height="24" />
            </svg>
            <span className="relative text-gray-900">{post.title}</span>
          </span>
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          {post.content}
        </p>
      </div>
      <div className="mb-4 transition-shadow duration-300 hover:shadow-xl lg:mb-6">
        <img
          className="object-cover w-full h-56 rounded shadow-lg sm:h-64 md:h-80 lg:h-96"
          src="https://images.pexels.com/photos/3727459/pexels-photo-3727459.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
          alt=""
        />
      </div>
      <p className="max-w-xl mb-4 text-base text-gray-700 sm:mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud ullamco laboris aliquip ex ea.
      </p>
    </div>
  </div>
)

export default ListDetail
