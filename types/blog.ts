
export type CourseList = {
  _id: number;
  title: string;
  slug?: any;
  metadata?: string;
  publishedAt?: string;
  category?: string;
  status?: 'not-paid' | 'paid';
  mainImage?: any;
  mainVideo?: any;
  price?: string;
};


export interface PaystackButtonProps {
  text?: string;
  className?: string;
  email: string;
  amount: number; // amount in kobo
  publicKey: string;
  reference?: string;
  onSuccess: (reference: any) => void;
  onClose: () => void;
}




export type Author = {
  name: string;
  image: string;
  bio?: string;
  _id?: number | string;
  _ref?: number | string;
};

export type Course = {
  title: string;
  type: 'free' | 'paid';
  description: string;
  mainImage?: any;
  price?: number;
  oldPrice?: number;
  slug?: string;
}