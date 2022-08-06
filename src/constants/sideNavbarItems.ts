import { ABOUT, CRYPTO_CURRENCIES, HOME } from './routes'

interface ISideNavBarItems {
  id: number
  title: string
  href: string
}

export const sideNavBarItems: ISideNavBarItems[] = [
  {
    id: 0,
    title: 'Home',
    href: HOME,
  },
  {
    id: 1,
    title: 'CryptoCurrencies',
    href: CRYPTO_CURRENCIES,
  },
  {
    id: 2,
    title: 'About',
    href: ABOUT,
  },
]
