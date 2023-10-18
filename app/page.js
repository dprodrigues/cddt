export async function generateStaticParams() {
  return [{}];
}

export default function Home() {
  return (
    <div>
      <h3>Home</h3>
      <p>
        This page does not require authentication, so it wont redirect to the
        login page if you are not signed in.
      </p>
      <p>
        If you remove `getServerSideProps` from this page, it will be static and
        load the authed user only on the client side.
      </p>
    </div>
  );
}
