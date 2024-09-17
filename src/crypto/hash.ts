import * as argon2 from 'argon2';

export async function hash(data: string): Promise<string> {
  try {
    const result = await argon2.hash(data);
    return result
  } catch (error) {
    console.error('Error hashing data:', error);
    throw error;
  }
}

export async function compare(data: string, hash: string): Promise<boolean> {
  try {
    return await argon2.verify(hash, data);
  } catch (error) {
    console.error('Error verifying hash:', error);
    return false;
  }
}
