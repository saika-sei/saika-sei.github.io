export type Prefecture = {
  key: string;
  ko: string;
  jp: string;
  region: string;
  x: number;
  y: number;
  w: number;
  h: number;
};

export const prefectures: Prefecture[] = [
  { key: 'Hokkaido', ko: '홋카이도', jp: '北海道', region: 'hokkaido', x: 15, y: 0, w: 3, h: 3 },
  { key: 'Aomori', ko: '아오모리', jp: '青森', region: 'tohoku', x: 15, y: 5, w: 2, h: 1 },
  { key: 'Akita', ko: '아키타', jp: '秋田', region: 'tohoku', x: 14, y: 6, w: 1, h: 1 },
  { key: 'Iwate', ko: '이와테', jp: '岩手', region: 'tohoku', x: 15, y: 6, w: 1, h: 1 },
  { key: 'Yamagata', ko: '야마가타', jp: '山形', region: 'tohoku', x: 14, y: 7, w: 1, h: 1 },
  { key: 'Miyagi', ko: '미야기', jp: '宮城', region: 'tohoku', x: 15, y: 7, w: 1, h: 1 },
  { key: 'Fukushima', ko: '후쿠시마', jp: '福島', region: 'tohoku', x: 15, y: 8, w: 1, h: 1 },
  { key: 'Niigata', ko: '니가타', jp: '新潟', region: 'chubu', x: 13, y: 8, w: 2, h: 1 },
  { key: 'Toyama', ko: '도야마', jp: '富山', region: 'chubu', x: 12, y: 8, w: 1, h: 1 },
  { key: 'Ishikawa', ko: '이시카와', jp: '石川', region: 'chubu', x: 11, y: 8, w: 1, h: 2 },
  { key: 'Fukui', ko: '후쿠이', jp: '福井', region: 'chubu', x: 10, y: 8, w: 1, h: 1 },
  { key: 'Nagano', ko: '나가노', jp: '長野', region: 'chubu', x: 12, y: 9, w: 1, h: 2 },
  { key: 'Gifu', ko: '기후', jp: '岐阜', region: 'chubu', x: 11, y: 10, w: 1, h: 2 },
  { key: 'Yamanashi', ko: '야마나시', jp: '山梨', region: 'chubu', x: 12, y: 11, w: 1, h: 1 },
  { key: 'Aichi', ko: '아이치', jp: '愛知', region: 'chubu', x: 11, y: 12, w: 1, h: 1 },
  { key: 'Shizuoka', ko: '시즈오카', jp: '静岡', region: 'chubu', x: 12, y: 12, w: 2, h: 1 },
  { key: 'Gunma', ko: '군마', jp: '群馬', region: 'kanto', x: 14, y: 9, w: 1, h: 1 },
  { key: 'Tochigi', ko: '도치기', jp: '栃木', region: 'kanto', x: 15, y: 9, w: 1, h: 1 },
  { key: 'Ibaraki', ko: '이바라키', jp: '茨城', region: 'kanto', x: 16, y: 9, w: 1, h: 2 },
  { key: 'Saitama', ko: '사이타마', jp: '埼玉', region: 'kanto', x: 14, y: 10, w: 2, h: 1 },
  { key: 'Tokyo', ko: '도쿄', jp: '東京', region: 'kanto', x: 14, y: 11, w: 2, h: 1 },
  { key: 'Chiba', ko: '치바', jp: '千葉', region: 'kanto', x: 16, y: 11, w: 1, h: 2 },
  { key: 'Kanagawa', ko: '가나가와', jp: '神奈川', region: 'kanto', x: 14, y: 12, w: 1, h: 1 },
  { key: 'Hyogo', ko: '효고', jp: '兵庫', region: 'kansai', x: 8, y: 8, w: 1, h: 2 },
  { key: 'Kyoto', ko: '교토', jp: '京都', region: 'kansai', x: 9, y: 8, w: 1, h: 2 },
  { key: 'Shiga', ko: '시가', jp: '滋賀', region: 'kansai', x: 10, y: 9, w: 1, h: 1 },
  { key: 'Osaka', ko: '오사카', jp: '大阪', region: 'kansai', x: 9, y: 10, w: 1, h: 2 },
  { key: 'Nara', ko: '나라', jp: '奈良', region: 'kansai', x: 10, y: 10, w: 1, h: 2 },
  { key: 'Mie', ko: '미에', jp: '三重', region: 'kansai', x: 11, y: 10, w: 1, h: 2 },
  { key: 'Wakayama', ko: '와카야마', jp: '和歌山', region: 'kansai', x: 9, y: 12, w: 3, h: 1 },
  { key: 'Yamaguchi', ko: '야마구치', jp: '山口', region: 'chugoku', x: 4, y: 8, w: 1, h: 2 },
  { key: 'Shimane', ko: '시마네', jp: '島根', region: 'chugoku', x: 5, y: 8, w: 1, h: 1 },
  { key: 'Tottori', ko: '돗토리', jp: '鳥取', region: 'chugoku', x: 6, y: 8, w: 1, h: 1 },
  { key: 'Hiroshima', ko: '히로시마', jp: '広島', region: 'chugoku', x: 5, y: 9, w: 1, h: 1 },
  { key: 'Okayama', ko: '오카야마', jp: '岡山', region: 'chugoku', x: 6, y: 9, w: 1, h: 1 },
  { key: 'Ehime', ko: '에히메', jp: '愛媛', region: 'shikoku', x: 4, y: 13, w: 2, h: 1 },
  { key: 'Kagawa', ko: '카가와', jp: '香川', region: 'shikoku', x: 6, y: 13, w: 2, h: 1 },
  { key: 'Kochi', ko: '고치', jp: '高知', region: 'shikoku', x: 4, y: 14, w: 2, h: 1 },
  { key: 'Tokushima', ko: '도쿠시마', jp: '徳島', region: 'shikoku', x: 6, y: 14, w: 2, h: 1 },
  { key: 'Nagasaki', ko: '나가사키', jp: '長崎', region: 'kyushu', x: 0, y: 9, w: 1, h: 1 },
  { key: 'Saga', ko: '사가', jp: '佐賀', region: 'kyushu', x: 1, y: 9, w: 1, h: 1 },
  { key: 'Fukuoka', ko: '후쿠오카', jp: '福岡', region: 'kyushu', x: 2, y: 9, w: 1, h: 1 },
  { key: 'Kumamoto', ko: '구마모토', jp: '熊本', region: 'kyushu', x: 1, y: 10, w: 1, h: 2 },
  { key: 'Oita', ko: '오이타', jp: '大分', region: 'kyushu', x: 2, y: 10, w: 1, h: 1 },
  { key: 'Miyazaki', ko: '미야자키', jp: '宮崎', region: 'kyushu', x: 2, y: 11, w: 1, h: 1 },
  { key: 'Kagoshima', ko: '가고시마', jp: '鹿児島', region: 'kyushu', x: 1, y: 12, w: 2, h: 1 },
  { key: 'Okinawa', ko: '오키나와', jp: '沖縄', region: 'okinawa', x: 0, y: 16, w: 1, h: 1 }
];
