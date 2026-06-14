export const site = {
  title: 'Sei Irodori',
  description: '여행, 공부, 취향 기록',
  url: 'https://saika-sei.github.io',
  author: 'sei',
  repository: 'saika-sei/saika-sei.github.io'
};

export const primaryCategories = [
  {
    slug: 'travel',
    title: '여행',
    count: 117,
    description: '다녀온 곳의 짧은 기록'
  },
  {
    slug: 'study',
    title: '공부',
    count: 13,
    description: '다시 볼 노트'
  },
  {
    slug: 'other',
    title: '기타',
    count: 69,
    description: '음악, 칵테일, 사진'
  }
] as const;

export type PrimaryCategorySlug = (typeof primaryCategories)[number]['slug'];
