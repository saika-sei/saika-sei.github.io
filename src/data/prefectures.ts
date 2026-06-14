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
  { key: 'Hokkaido', ko: '홋카이도', jp: '北海道', region: 'hokkaido', x: 72, y: 2, w: 24, h: 18 },
  { key: 'Aomori', ko: '아오모리', jp: '青森', region: 'tohoku', x: 66, y: 25, w: 10, h: 7 },
  { key: 'Iwate', ko: '이와테', jp: '岩手', region: 'tohoku', x: 76, y: 32, w: 9, h: 10 },
  { key: 'Miyagi', ko: '미야기', jp: '宮城', region: 'tohoku', x: 76, y: 43, w: 10, h: 8 },
  { key: 'Akita', ko: '아키타', jp: '秋田', region: 'tohoku', x: 66, y: 33, w: 9, h: 9 },
  { key: 'Yamagata', ko: '야마가타', jp: '山形', region: 'tohoku', x: 67, y: 43, w: 8, h: 8 },
  { key: 'Fukushima', ko: '후쿠시마', jp: '福島', region: 'tohoku', x: 75, y: 52, w: 11, h: 8 },
  { key: 'Ibaraki', ko: '이바라키', jp: '茨城', region: 'kanto', x: 86, y: 60, w: 8, h: 8 },
  { key: 'Tochigi', ko: '도치기', jp: '栃木', region: 'kanto', x: 78, y: 60, w: 8, h: 7 },
  { key: 'Gunma', ko: '군마', jp: '群馬', region: 'kanto', x: 70, y: 60, w: 8, h: 7 },
  { key: 'Saitama', ko: '사이타마', jp: '埼玉', region: 'kanto', x: 71, y: 68, w: 11, h: 6 },
  { key: 'Chiba', ko: '치바', jp: '千葉', region: 'kanto', x: 82, y: 69, w: 9, h: 11 },
  { key: 'Tokyo', ko: '도쿄', jp: '東京', region: 'kanto', x: 73, y: 75, w: 8, h: 5 },
  { key: 'Kanagawa', ko: '가나가와', jp: '神奈川', region: 'kanto', x: 73, y: 80, w: 8, h: 5 },
  { key: 'Niigata', ko: '니가타', jp: '新潟', region: 'chubu', x: 60, y: 48, w: 10, h: 10 },
  { key: 'Toyama', ko: '도야마', jp: '富山', region: 'chubu', x: 53, y: 56, w: 7, h: 6 },
  { key: 'Ishikawa', ko: '이시카와', jp: '石川', region: 'chubu', x: 49, y: 54, w: 5, h: 8 },
  { key: 'Fukui', ko: '후쿠이', jp: '福井', region: 'chubu', x: 45, y: 60, w: 6, h: 7 },
  { key: 'Yamanashi', ko: '야마나시', jp: '山梨', region: 'chubu', x: 70, y: 75, w: 6, h: 6 },
  { key: 'Nagano', ko: '나가노', jp: '長野', region: 'chubu', x: 61, y: 59, w: 9, h: 14 },
  { key: 'Gifu', ko: '기후', jp: '岐阜', region: 'chubu', x: 54, y: 68, w: 8, h: 11 },
  { key: 'Shizuoka', ko: '시즈오카', jp: '静岡', region: 'chubu', x: 65, y: 82, w: 10, h: 6 },
  { key: 'Aichi', ko: '아이치', jp: '愛知', region: 'chubu', x: 58, y: 82, w: 8, h: 6 },
  { key: 'Mie', ko: '미에', jp: '三重', region: 'kansai', x: 57, y: 88, w: 5, h: 10 },
  { key: 'Shiga', ko: '시가', jp: '滋賀', region: 'kansai', x: 49, y: 72, w: 5, h: 10 },
  { key: 'Kyoto', ko: '교토', jp: '京都', region: 'kansai', x: 44, y: 69, w: 5, h: 9 },
  { key: 'Osaka', ko: '오사카', jp: '大阪', region: 'kansai', x: 41, y: 78, w: 5, h: 8 },
  { key: 'Hyogo', ko: '효고', jp: '兵庫', region: 'kansai', x: 35, y: 71, w: 8, h: 12 },
  { key: 'Nara', ko: '나라', jp: '奈良', region: 'kansai', x: 48, y: 82, w: 7, h: 8 },
  { key: 'Wakayama', ko: '와카야마', jp: '和歌山', region: 'kansai', x: 42, y: 89, w: 8, h: 8 },
  { key: 'Tottori', ko: '돗토리', jp: '鳥取', region: 'chugoku', x: 31, y: 68, w: 7, h: 6 },
  { key: 'Shimane', ko: '시마네', jp: '島根', region: 'chugoku', x: 23, y: 68, w: 8, h: 6 },
  { key: 'Okayama', ko: '오카야마', jp: '岡山', region: 'chugoku', x: 31, y: 75, w: 7, h: 7 },
  { key: 'Hiroshima', ko: '히로시마', jp: '広島', region: 'chugoku', x: 24, y: 75, w: 8, h: 7 },
  { key: 'Yamaguchi', ko: '야마구치', jp: '山口', region: 'chugoku', x: 16, y: 73, w: 7, h: 9 },
  { key: 'Tokushima', ko: '도쿠시마', jp: '徳島', region: 'shikoku', x: 40, y: 84, w: 8, h: 6 },
  { key: 'Kagawa', ko: '가가와', jp: '香川', region: 'shikoku', x: 33, y: 84, w: 7, h: 5 },
  { key: 'Ehime', ko: '에히메', jp: '愛媛', region: 'shikoku', x: 26, y: 85, w: 8, h: 7 },
  { key: 'Kochi', ko: '고치', jp: '高知', region: 'shikoku', x: 29, y: 92, w: 12, h: 5 },
  { key: 'Fukuoka', ko: '후쿠오카', jp: '福岡', region: 'kyushu', x: 12, y: 75, w: 7, h: 7 },
  { key: 'Saga', ko: '사가', jp: '佐賀', region: 'kyushu', x: 6, y: 75, w: 6, h: 7 },
  { key: 'Nagasaki', ko: '나가사키', jp: '長崎', region: 'kyushu', x: 1, y: 75, w: 5, h: 13 },
  { key: 'Kumamoto', ko: '구마모토', jp: '熊本', region: 'kyushu', x: 5, y: 83, w: 9, h: 10 },
  { key: 'Oita', ko: '오이타', jp: '大分', region: 'kyushu', x: 14, y: 82, w: 8, h: 8 },
  { key: 'Miyazaki', ko: '미야자키', jp: '宮崎', region: 'kyushu', x: 11, y: 91, w: 7, h: 8 },
  { key: 'Kagoshima', ko: '가고시마', jp: '鹿児島', region: 'kyushu', x: 5, y: 93, w: 9, h: 7 },
  { key: 'Okinawa', ko: '오키나와', jp: '沖縄', region: 'okinawa', x: 1, y: 94, w: 6, h: 6 }
];
