export type ContentType =
  | "research"
  | "project"
  | "thinking"
  | "framework"
  | "course"
  | "resource";

export type BaseContent = {
  title: string;
  slug: string;

  description: string;
  summary?: string;

  type: ContentType;

  year: string;
  status?: string;

  themes?: string[];
  industries?: string[];
  capabilities?: string[];
  thinkingStyles?: string[];
  tools?: string[];
  companies?: string[];
  courses?: string[];
  people?: string[];
  relatedContent?: string[];

  featured?: boolean;

  metaTitle: string;
  metaDescription: string;
};

export type ResearchItem = BaseContent & {
  methodology: string;
  abstract: string;
};

export type ProjectItem = BaseContent & {
  problem: string;
  approach: string;
  outcome: string;
};

export type ThinkingItem = BaseContent & {
  body: string;
};

export type FrameworkItem = BaseContent & {
  purpose: string;
};

export type CourseItem = BaseContent & {
  overview: string;
};

export type ResourceItem = BaseContent & {
  resourceType: string;
};