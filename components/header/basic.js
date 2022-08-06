import Link from 'next/link'
import Image from 'next/future/image'

export const HeaderBasic = () => (
  <header className="max-w-7xl mx-auto px-4 sm:px-6">
    <div className="flex justify-between items-center py-5 md:justify-start md:space-x-10">
      <Link href="/">
        <a>
          <span className="sr-only">CDDT</span>

          <Image
            className="h-8 w-auto sm:h-10"
            src="/images/logos/logo.png"
            alt="logo"
            height={50}
            width={50}
          />
        </a>
      </Link>
    </div>
  </header>
)
