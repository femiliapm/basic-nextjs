import Link from 'next/link';
import Layout from '../../components/Layout';

export default function Users() {
  return (
    <Layout>
      <h1>User Page</h1>
      <main>
        <ul>
          <li>
            <Link href="/user/detail">User Detail</Link>
          </li>
        </ul>
      </main>
    </Layout>
  );
}
