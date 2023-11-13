export type BlogPost = {
  date: string;
  readTime: string;
  reads: number;
  title: string;
  categories: string[];
  description: string;
};

export type EmailRequestType = {
  name: string;
  email: string;
  message: string;
};
