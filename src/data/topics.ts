export type Topic = {
  slug: string;
  title: string;
  count: number;
  parent: 'study' | 'other';
  summary: string;
};

export const studyTopics: Topic[] = [
  {
    slug: 'study-notes',
    title: '공부',
    count: 13,
    parent: 'study',
    summary: '언어, 개발, 읽은 자료를 다시 찾기 쉽게 정리한 노트'
  }
];

export const otherTopics: Topic[] = [
  {
    slug: 'cocktail',
    title: '칵테일',
    count: 48,
    parent: 'other',
    summary: '레시피, 재료, 바에서 만난 맛의 기록'
  },
  {
    slug: 'music',
    title: '음악',
    count: 18,
    parent: 'other',
    summary: '라이브, 앨범, 플레이리스트를 둘러싼 감상'
  },
  {
    slug: 'photo-work',
    title: '사진 및 작업',
    count: 3,
    parent: 'other',
    summary: '사진 정리와 작업 과정에서 남겨둔 작은 메모'
  }
];

export const topics = [...studyTopics, ...otherTopics];
