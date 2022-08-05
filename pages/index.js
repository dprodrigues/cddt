import { LayoutMain } from '@/components/layout'

const Home = () => {
  return (
    <div>
      <div>
        <h3>Home</h3>
        <p>
          This page does not require authentication, so it wont redirect to the
          login page if you are not signed in.
        </p>
        <p>
          If you remove `getServerSideProps` from this page, it will be static
          and load the authed user only on the client side.
        </p>
      </div>
    </div>
  )
}

Home.getLayout = (page) => <LayoutMain>{page}</LayoutMain>

export default Home
