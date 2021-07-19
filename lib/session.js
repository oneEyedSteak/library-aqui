import { getSession } from 'next-auth/client';

export default async ({ req, res }) => {
  
  const session = await getSession({ req });

  if (!session) {
    res.writeHead(302, { Location: '/login' });
    res.end();
  }

  return session;
};
