'use server';

import { ENV } from '@/lib/envManager';
import { cookies } from 'next/headers';

type TokenPayload = {

    accessToken: string;
    refreshToken: string;
};

export async function saveAdminSession(data: TokenPayload) {
  const { accessToken, refreshToken } = data;
  const cookieStore = await cookies(); // no need to await

  // Save access token
  cookieStore.set('accessToken', accessToken, {
    httpOnly: true,
    secure: ENV.NODE_ENV === 'production',
    sameSite: 'strict', // lowercase
    path: '/',
    maxAge: 60 * 15, // 15 minutes
  });

  // Save refresh token
  cookieStore.set('refreshToken', refreshToken, {
    httpOnly: true,
    secure: ENV.NODE_ENV === 'production',
    sameSite: 'strict', // lowercase
    path: '/',
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });

  return {
    message: 'Tokens stored in cookies',
  };
}
