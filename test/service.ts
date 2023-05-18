import { ethers } from 'ethers';

export async function signMessage(privateKey: string): Promise<any> {
  // Create an ethers wallet instance using the private key
  const wallet = new ethers.Wallet(privateKey);
  const msg = `Welcome to CBETWORLD! \n Click to sign in and accept the Terms of Service. \n This request will not trigger a blockchain transaction or cost any gas fees. \n Wallet address: ${wallet.address}`;

  // Sign the message hash using the wallet instance
  const signature = await wallet.signMessage(msg);

  return [signature, wallet.address];
}