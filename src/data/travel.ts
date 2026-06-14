export type TravelRegion = 'japan' | 'world';

export type TravelTrip = {
  slug: string;
  title: string;
  count: number;
  yearMonth: string;
  region: TravelRegion;
  prefectures: string[];
  countries: string[];
  summary: string;
};

export const travelTrips: TravelTrip[] = [
  {
    slug: '1712-kansai',
    title: '1712 간사이',
    count: 3,
    yearMonth: '2017.12',
    region: 'japan',
    prefectures: ['Osaka', 'Kyoto', 'Nara', 'Hyogo'],
    countries: ['일본'],
    summary: '첫 간사이의 역, 사찰, 겨울 골목을 모은 기록'
  },
  {
    slug: '1812-tokyo',
    title: '1812 도쿄',
    count: 2,
    yearMonth: '2018.12',
    region: 'japan',
    prefectures: ['Tokyo'],
    countries: ['일본'],
    summary: '도쿄의 공연장과 늦은 밤 산책'
  },
  {
    slug: '2201-us-coasts',
    title: '2201 미국 동ㆍ서해안',
    count: 6,
    yearMonth: '2022.01',
    region: 'world',
    prefectures: [],
    countries: ['미국'],
    summary: '동부와 서부의 도시를 길게 가로지른 기록'
  },
  {
    slug: '2301-central-south-japan',
    title: '2301 일본 중ㆍ남부',
    count: 21,
    yearMonth: '2023.01',
    region: 'japan',
    prefectures: ['Aichi', 'Gifu', 'Shizuoka', 'Osaka', 'Kyoto', 'Kagawa', 'Okayama'],
    countries: ['일본'],
    summary: '주부와 세토 내해 쪽으로 이어진 긴 겨울 동선'
  },
  {
    slug: '2302-tokyo-kawaguchiko',
    title: '2302 도쿄ㆍ카와구치코',
    count: 3,
    yearMonth: '2023.02',
    region: 'japan',
    prefectures: ['Tokyo', 'Yamanashi'],
    countries: ['일본'],
    summary: '도쿄에서 후지산이 보이는 호수까지'
  },
  {
    slug: '2308-c102-yamanashi',
    title: '2308 C102ㆍ야마나시',
    count: 4,
    yearMonth: '2023.08',
    region: 'japan',
    prefectures: ['Tokyo', 'Yamanashi'],
    countries: ['일본'],
    summary: '여름 도쿄와 야마나시의 짧은 왕복'
  },
  {
    slug: '2401-nagoya-gifu-shizuoka-tokyo',
    title: '2401 나고야ㆍ기후ㆍ시즈오카ㆍ도쿄',
    count: 6,
    yearMonth: '2024.01',
    region: 'japan',
    prefectures: ['Aichi', 'Gifu', 'Shizuoka', 'Tokyo'],
    countries: ['일본'],
    summary: '나고야에서 도쿄로 이어지는 겨울 철도 여행'
  },
  {
    slug: '2405-okayama-shikoku-kansai',
    title: '2405 오카야마ㆍ시코쿠ㆍ간사이',
    count: 3,
    yearMonth: '2024.05',
    region: 'japan',
    prefectures: ['Okayama', 'Kagawa', 'Tokushima', 'Ehime', 'Kochi', 'Osaka', 'Kyoto'],
    countries: ['일본'],
    summary: '오카야마, 시코쿠, 간사이를 느슨하게 잇는 봄 일정'
  },
  {
    slug: '2408-east-north-japan',
    title: '2408 일본 동ㆍ북부',
    count: 8,
    yearMonth: '2024.08',
    region: 'japan',
    prefectures: ['Hokkaido', 'Aomori', 'Miyagi', 'Fukushima', 'Tokyo'],
    countries: ['일본'],
    summary: '동북과 북쪽의 공기, 여름의 긴 이동'
  },
  {
    slug: '2411-nagasaki',
    title: '2411 나가사키',
    count: 3,
    yearMonth: '2024.11',
    region: 'japan',
    prefectures: ['Nagasaki'],
    countries: ['일본'],
    summary: '항구와 언덕으로 기억되는 나가사키'
  },
  {
    slug: '2412-c105',
    title: '2412 C105',
    count: 3,
    yearMonth: '2024.12',
    region: 'japan',
    prefectures: ['Tokyo'],
    countries: ['일본'],
    summary: '연말 도쿄와 행사장의 기록'
  },
  {
    slug: '2501-shizuoka-hakone-tokyo',
    title: '2501 시즈오카ㆍ하코네ㆍ도쿄',
    count: 6,
    yearMonth: '2025.01',
    region: 'japan',
    prefectures: ['Shizuoka', 'Kanagawa', 'Tokyo'],
    countries: ['일본'],
    summary: '시즈오카, 하코네, 도쿄 사이의 겨울 풍경'
  },
  {
    slug: '2504-maimai-joint-live',
    title: '2504 마이마이빼 합동 라이브',
    count: 2,
    yearMonth: '2025.04',
    region: 'japan',
    prefectures: ['Tokyo'],
    countries: ['일본'],
    summary: '라이브 일정에 맞춘 짧고 밀도 있는 여행'
  },
  {
    slug: '2506-shizuoka-yamanashi-tokyo',
    title: '2506 시즈오카ㆍ야마나시ㆍ도쿄',
    count: 3,
    yearMonth: '2025.06',
    region: 'japan',
    prefectures: ['Shizuoka', 'Yamanashi', 'Tokyo'],
    countries: ['일본'],
    summary: '후지산 주변을 천천히 도는 초여름 일정'
  },
  {
    slug: '2507-takamatsu-shodoshima',
    title: '2507 타카마츠ㆍ쇼도시마',
    count: 3,
    yearMonth: '2025.07',
    region: 'japan',
    prefectures: ['Kagawa'],
    countries: ['일본'],
    summary: '다카마쓰와 쇼도시마의 섬 풍경'
  },
  {
    slug: '2507-europe-seven-countries',
    title: '2507 유럽 7개국',
    count: 26,
    yearMonth: '2025.07',
    region: 'world',
    prefectures: [],
    countries: ['영국', '프랑스', '스위스', '이탈리아', '오스트리아', '체코', '독일'],
    summary: '여러 나라를 통과하며 남긴 긴 여름 여행'
  },
  {
    slug: '2512-mygo-8th',
    title: '2512 MyGO!!!!! 8th',
    count: 2,
    yearMonth: '2025.12',
    region: 'japan',
    prefectures: ['Tokyo'],
    countries: ['일본'],
    summary: '공연을 중심에 둔 도쿄 방문 기록'
  },
  {
    slug: '2601-c107-poppipa-new-year-nikko',
    title: '2601 C107ㆍ포피파 신년ㆍ닛코',
    count: 4,
    yearMonth: '2026.01',
    region: 'japan',
    prefectures: ['Tokyo', 'Tochigi'],
    countries: ['일본'],
    summary: '연초 도쿄와 닛코까지 이어지는 일정'
  },
  {
    slug: '2602-hokkaido-central-south',
    title: '2602 홋카이도 중ㆍ남부',
    count: 3,
    yearMonth: '2026.02',
    region: 'japan',
    prefectures: ['Hokkaido'],
    countries: ['일본'],
    summary: '홋카이도 중남부의 눈과 이동'
  },
  {
    slug: '2603-maimai-two-man-honji',
    title: '2603 마이마이 투맨ㆍ혼지',
    count: 3,
    yearMonth: '2026.03',
    region: 'japan',
    prefectures: ['Tokyo'],
    countries: ['일본'],
    summary: '공연과 도쿄의 짧은 체류'
  },
  {
    slug: '2605-aoki-hina-live',
    title: '2605 아오키 하나 라이브',
    count: 2,
    yearMonth: '2026.05',
    region: 'japan',
    prefectures: ['Tokyo'],
    countries: ['일본'],
    summary: '라이브를 중심으로 정리한 봄 일정'
  },
  {
    slug: '2607-mygo-9th-chichibu',
    title: '2607 MyGO!!!!! 9thㆍ치치부',
    count: 0,
    yearMonth: '2026.07',
    region: 'japan',
    prefectures: ['Saitama', 'Tokyo'],
    countries: ['일본'],
    summary: '치치부와 공연 기록을 위한 예정 카테고리'
  },
  {
    slug: '2608-okinawa-japan-alps-c108',
    title: '2608 오키나와ㆍ일본 알프스ㆍC108',
    count: 0,
    yearMonth: '2026.08',
    region: 'japan',
    prefectures: ['Okinawa', 'Nagano', 'Toyama', 'Tokyo'],
    countries: ['일본'],
    summary: '오키나와, 일본 알프스, C108을 잇는 예정 카테고리'
  }
];

export const visitedPrefectures = [...new Set(travelTrips.flatMap((trip) => trip.prefectures))];

export const tripsByPrefecture = visitedPrefectures.reduce<Record<string, TravelTrip[]>>((acc, prefecture) => {
  acc[prefecture] = travelTrips.filter((trip) => trip.prefectures.includes(prefecture));
  return acc;
}, {});
