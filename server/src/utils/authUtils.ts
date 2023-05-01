import jwt from 'jsonwebtoken';

export const signToken = (
  userId: string,
  username: string
): string | undefined => {
  const secret = process.env.JWT_SECRET;

  if (!secret) return;

  const token = jwt.sign({ id: userId, username }, secret);
  return token;
};
