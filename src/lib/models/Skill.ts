export type Tag = 'language' | 'framework' | 'frontend' | 'database' | 'editor';

export interface Skill {
  name: string;
  description: string;
  imageSrc: string;
  tags: Tag[];
}
