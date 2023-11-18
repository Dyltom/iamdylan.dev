export type Article = {
  id: string;
  date: string;
  readTime: number;
  views: number;
  Title: string;
  shortDescription: string;
  Content: ArticleContent[];
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  slug: string;
};

export type EmailRequestType = {
  name: string;
  email: string;
  message: string;
};

export type ArticleContent = {
  type: string;
  children: ArticleContentChild[];
  format?: 'unordered' | 'ordered'; // For lists
  level?: number; // For headings
};

export type ArticleContentChild = {
  type: string;
  text: string;
  bold?: boolean;
  italic?: boolean;
  strikethrough?: boolean;
  code?: boolean;
  url?: string; // For links
  children?: ArticleContentChild[]; // For nested structures like links
};
