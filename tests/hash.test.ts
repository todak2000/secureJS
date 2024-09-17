import { hash, compare } from "../src/crypto/hash";

describe("Hashing", () => {
  it("should hash and verify password successfully", async () => {
    const password = "mySecurePassword123";

    const hashedPassword = await hash(password);
    const isValid = await compare(password, hashedPassword);

    expect(isValid).toBe(true);
  });

  it("should fail to verify wrong password", async () => {
    const password = "mySecurePassword123";
    const wrongPassword = "wrongPassword456";

    const hashedPassword = await hash(password);
    const isValid = await compare(wrongPassword, hashedPassword);

    expect(isValid).toBe(false);
  });

  it("should produce different hashes for the same password", async () => {
    const password = "mySecurePassword123";

    const hash1 = await hash(password);
    const hash2 = await hash(password);

    expect(hash1).not.toBe(hash2);
  });
});
