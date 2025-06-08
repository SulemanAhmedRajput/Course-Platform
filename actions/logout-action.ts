'use server';

import { cookies } from 'next/headers';
import { revalidatePath } from 'next/cache';

export async function logoutAdmin() {
  const cookieStore = await cookies();

  // Delete tokens
  cookieStore.delete('accessToken');
  cookieStore.delete('refreshToken');

  // Revalidate current and dashboard pages (customize as needed)
  revalidatePath('/');

  return {
    message: 'Tokens deleted from cookies',
    success: true,
  };
}
