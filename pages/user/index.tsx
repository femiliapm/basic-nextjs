import Link from 'next/link';

export default function Users() {
  return (
    <div>
      <Link href="/">Back to Home</Link>
      <h1>User Page</h1>
      <main>
        <ul>
          <li>
            <Link href="/user/detail">User Detail</Link>
          </li>
        </ul>
      </main>
    </div>
  );
}
