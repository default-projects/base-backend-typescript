import { ethers } from 'ethers';

const signMessage = async (privateKey: string): Promise<any> => {
  // Create an ethers wallet instance using the private key
  const wallet = new ethers.Wallet(privateKey);
  const msg = `Welcome ${wallet.address}`;

  // Sign the message hash using the wallet instance
  const signature = await wallet.signMessage(msg);

  return [signature, wallet.address];
}

export { signMessage }