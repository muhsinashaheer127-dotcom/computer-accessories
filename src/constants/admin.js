export const ADMIN_EMAIL = 'nazeemnazeem449@gmail.com';
export const ADMIN_PASSWORD = 'nazeem@04';

export const isSuperAdminEmail = (email) =>
  email?.trim().toLowerCase() === ADMIN_EMAIL.toLowerCase();
