import Image from 'next/image'
import Link from 'next/link'

export async function generateStaticParams() {
  return [{}]
}

export default function Home() {
  return (
    <div className="relative isolate py-32 px-6 pt-14 max-w-7xl mx-auto md:space-x-10">
      <div className="mx-auto max-w-7xl flex items-center justify-center flex-col md:flex-row">
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 text-center md:text-left">
            Organize Your Life, One Note at a Time.
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600 text-center md:text-left">
            Empower Your Productivity: Your ultimate task manager and
            note-taking app for enhanced focus and organization.
          </p>

          <div className="mt-10 flex items-center justify-center md:justify-start gap-x-6">
            <Link
              href="/auth/register"
              className="rounded-md bg-violet-800 hover:bg-violet-700 active:bg-violet-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Get started for free
            </Link>

            <Link
              href="/about"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <Image
          className="w-auto max-w-md lg:max-w-lg lg:-mr-8"
          src="/svgs/home-art.svg"
          alt="logo"
          height={500}
          width={500}
        />
      </div>
    </div>
  )
}
