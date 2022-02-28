import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {

  const items = [
    {
      title: "women",
      name: "Women",
    },
    {
      title: "lingerie",
      name: "Lingerie",
    },
    {
      title: "men",
      name: "Men",
    },
    {
      title: "kids",
      name: "kids",
    },
    {
      title: "home",
      name: "Home",
    },
    {
      title: "beauty",
      name: "Beauty",
    },
    {
      title: "flowers",
      name: "Flowers",
    },
    {
      title: "gifts",
      name: "Gifts",
    },
    {
      title: "offers",
      name: "Offers",
    }
  ];

  return (
    <nav>{items.map(item => {
      return <Link to={item.title}>{item.name}</Link>
    })}</nav>
  )
}

export default NavBar