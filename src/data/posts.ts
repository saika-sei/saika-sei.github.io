export type Post = {
  slug: string;
  title: string;
  date: string;
  category: 'travel' | 'study' | 'other';
  tripSlug?: string;
  topicSlug?: string;
  excerpt: string;
  tags: string[];
  body: string[];
};

export const posts: Post[] = [
  {
    slug: 'tokyo-winter-stations',
    title: '겨울 도쿄의 역 사이에서',
    date: '2025-01-18',
    category: 'travel',
    tripSlug: '2501-shizuoka-hakone-tokyo',
    excerpt: '시즈오카에서 도쿄까지.',
    tags: ['도쿄', '시즈오카', '하코네'],
    body: [
      '시즈오카에서 하코네를 지나 도쿄로 들어왔다.',
      '겨울 플랫폼의 공기와 짧은 환승만 남겨둔다.'
    ]
  },
  {
    slug: 'shodoshima-summer-note',
    title: '쇼도시마의 여름 메모',
    date: '2025-07-22',
    category: 'travel',
    tripSlug: '2507-takamatsu-shodoshima',
    excerpt: '다카마쓰와 쇼도시마.',
    tags: ['가가와', '쇼도시마', '섬'],
    body: [
      '배를 타고 섬으로 들어갔다.',
      '바다, 올리브, 늦은 오후.'
    ]
  },
  {
    slug: 'learning-log-template',
    title: '공부 기록을 오래 남기는 형식',
    date: '2026-05-10',
    category: 'study',
    topicSlug: 'study-notes',
    excerpt: '다시 볼 것만 남기기.',
    tags: ['노트', '학습', '정리'],
    body: [
      '이해한 것과 애매한 것을 나눠 적는다.',
      '다음에 펼쳤을 때 바로 이어갈 수 있으면 충분하다.'
    ]
  },
  {
    slug: 'pastel-cocktail-index',
    title: '분홍빛 칵테일 인덱스',
    date: '2026-04-02',
    category: 'other',
    topicSlug: 'cocktail',
    excerpt: '색과 향의 메모.',
    tags: ['칵테일', '레시피', '색'],
    body: [
      '재료보다 먼저 색과 향을 적는다.',
      '다시 만들 때 필요한 만큼만.'
    ]
  }
];

export const recentPosts = [...posts].sort((a, b) => b.date.localeCompare(a.date));
