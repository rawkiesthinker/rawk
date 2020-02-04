import React from 'react'
import Link from 'next/link'

const links = [
  { href: 'https://zeit.co/now', label: 'ZEIT' },
  { href: 'https://github.com/zeit/next.js', label: 'GitHub' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = (prop) => (

   <div className="w-full h-12 text-lg flex items-center p-2">
        <div className="w-1/2 flex font-default-book uppercase">{prop.title}</div>
       
        <div className="w-1/2 flex justify-end items-end text-sm md:text-md lg:text-lg">
          developing freedom one app at a time
        </div>
    </div>

    // <style jsx>{`
    //   :global(body) {
    //     margin: 0;
    //     font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
    //       Helvetica, sans-serif;
    //   }
    //   nav {
    //     text-align: center;
    //   }
    //   ul {
    //     display: flex;
    //     justify-content: space-between;
    //   }
    //   nav > ul {
    //     padding: 4px 16px;
    //   }
    //   li {
    //     display: flex;
    //     padding: 6px 8px;
    //   }
    //   a {
    //     color: #067df7;
    //     text-decoration: none;
    //     font-size: 13px;
    //   }
    // `}</style>
 
)

export default Nav
