import { AiOutlineHome } from 'react-icons/ai'
import { HiOutlineCurrencyDollar } from 'react-icons/hi'
import { AiOutlineInfoCircle } from 'react-icons/ai'

export const sideNavBarItems = [
  {
    id: 0,
    title: 'Home',
    href: '/',
    icon: <AiOutlineHome />,
  },
  {
    id: 1,
    title: 'CryptoCurrencies',
    href: '/cryptoCurrencies',
    icon: <HiOutlineCurrencyDollar />,
  },
  {
    id: 2,
    title: 'About',
    href: '/about',
    icon: <AiOutlineInfoCircle />,
  },
]
