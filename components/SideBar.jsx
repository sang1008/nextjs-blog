import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react';

import avatar from '../static/images/avatar.jpeg'

export default function SideBar(){

	const [theme, setTheme] = useState('')
	const [darkScheme, setDarkScheme] = useState(false)

  const darkModeChange = ()=>{
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    setDarkMode(prefersDarkScheme.matches)
    prefersDarkScheme.addEventListener('change', e =>{
			setDarkScheme(e.matches)
      setDarkMode(e.matches)
    })
    useEffect(()=>{
			setDarkScheme(prefersDarkScheme.matches)
        return ()=>{
					prefersDarkScheme.removeEventListener('change', e =>{
						setDarkScheme(e.matches)
						setDarkMode(e.matches)
					})
        }
    },[])
  }

  const setDarkMode = (darkMode)=>{
    const body = document.body
    if(theme){
        body.setAttribute('mode', theme)
    } else {
        if (darkMode) {
					body.setAttribute('mode', 'dark')
				} else {
					body.setAttribute('mode', 'light')
				}
    }
  }

  if(typeof window !== 'undefined'){
      const theme = localStorage.getItem('mode')
      if(theme){
        setTheme(theme)
      }
    darkModeChange()
  }

	const [nav] = useState([
		{href: '/', name: '首页'},
		{href: '/categories', name: '分类'},
		{href: '/archives', name: '归档'},
		{href: '/friend', name: '友人帐'},
		{href: '/tags', name: '标签强'},
	])

	return (
		<div id='sidebar'>
			<div id="avatar" className='flex items-center justify-center mt-12'>
				<a href='/' className='w-24 h-24 rounded-full overflow-hidden border-2'>
					<Image src={avatar} className='hover:scale-125 transition-all duration-500' />
				</a>
			</div>
			<nav>
				<ul>
					{
						nav.map(item=>{
							return (
								<li key={item.name}>
									<Link href={item.href} as={item.href} shallow>{ item.name }</Link>
								</li>
							)
						})
					}
				</ul>
			</nav>
		</div>
	)
}