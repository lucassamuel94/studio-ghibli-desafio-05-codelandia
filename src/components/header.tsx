import logoFacebook from '../assets/logo-facebook.svg'
import logoGoogle from '../assets/logo-google.svg'
import logoInstagram from '../assets/logo-instagram.svg'
import logoTwitter from '../assets/logo-twitter.svg'
import logo from '../assets/logo.svg'

type LinkProps = {
  id: number,
  imageUrl: string,
  alt: string,
}

export default function Header() {
  const links: Array<LinkProps> = [
    {
      id: 1,
      imageUrl: logoGoogle,
      alt: 'Google'
    },
    {
      id: 2,
      imageUrl: logoFacebook,
      alt: 'Facebook'
    },
    {
      id: 3,
      imageUrl: logoInstagram,
      alt: 'Instagram'
    },
    {
      id: 4,
      imageUrl: logoTwitter,
      alt: 'Twitter'
    },
  ]

  return (
    <header className='py-8 lg:py-12 flex items-center justify-center md:justify-between'>
      <img src={logo} alt="logo" className='h-12 md:h-16 lg:h-20' />

      <nav className='hidden md:inline-flex md:items-center md:gap-6'>
        {
          links.map(link => (
            <a
              key={link.id}
              href='#'
              className='w-8 h-8 lg:w-10 lg:h-10 grid place-items-center border border-white rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300'
            >
              <img src={link.imageUrl} alt={link.alt} />
            </a>
          )
          )
        }
      </nav>
    </header>
  )
}