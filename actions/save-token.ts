'use server';

import { ENV } from '@/lib/envManager';
import { cookies } from 'next/headers';

type TokenPayload = {
    accessToken: string;
    refreshToken: string;
    email: string;
    role: string;
    name: string;
};

export async function saveAdminSession(data: TokenPayload) {
  const { accessToken, refreshToken, email, role, name } = data;
  const cookieStore = await cookies();
  console.log({
    ...data
  })
  

  // Save access token
  cookieStore.set('accessToken', accessToken, {
    httpOnly: true,
    secure: ENV.NODE_ENV === 'production',
    sameSite: 'strict',
    path: '/',
    maxAge: 60 * 15, // 15 minutes
  });

  // Save refresh token
  cookieStore.set('refreshToken', refreshToken, {
    httpOnly: true,
    secure: ENV.NODE_ENV === 'production',
    sameSite: 'strict',
    path: '/',
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });

  // Save user data (email, role, name) for client-side hydration
  cookieStore.set('userEmail', email, { path: '/', maxAge: 60 * 60 * 24 * 7 });
  cookieStore.set('userRole', role, { path: '/', maxAge: 60 * 60 * 24 * 7 });
  cookieStore.set('userName', name, { path: '/', maxAge: 60 * 60 * 24 * 7 });

  return {
    message: 'Tokens and user data stored in cookies',
  };
}

export async function destroyAdminSession() {
  const cookieStore = await cookies();
  cookieStore.delete('accessToken');
  cookieStore.delete('refreshToken');
  cookieStore.delete('userEmail');
  cookieStore.delete('userRole');
  cookieStore.delete('userName');
  return {
    message: 'Tokens and user data removed from cookies',
  };
}
