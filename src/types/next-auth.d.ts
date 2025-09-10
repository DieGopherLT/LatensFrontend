import 'next-auth';
import 'next-auth/jwt';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      email?: string | null;
      name?: string | null;
      image?: string | null;
      githubId: string;
      username: string;
      avatarUrl: string;
    };
    accessToken: string;
  }

  interface Profile {
    id: string;
    login: string;
    email?: string | null;
    name?: string | null;
    avatar_url: string;
  }

  interface User {
    id: string;
    email?: string | null;
    name?: string | null;
    image?: string | null;
  }

  interface Account {
    access_token?: string;
    scope?: string;
    token_type?: string;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    accessToken?: string;
    githubId?: string;
    username?: string;
    avatarUrl?: string;
  }
}
