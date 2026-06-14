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
  { key: 'Hokkaido', ko: '홋카이도', jp: '北海道', region: 'hokkaido', x: 82.11, y: 0, w: 17.12, h: 14.52 },
  { key: 'Aomori', ko: '아오모리', jp: '青森', region: 'tohoku', x: 84.81, y: 19.92, w: 11.97, h: 8.92 },
  { key: 'Iwate', ko: '이와테', jp: '岩手', region: 'tohoku', x: 91.12, y: 28.84, w: 8.62, h: 8.71 },
  { key: 'Miyagi', ko: '미야기', jp: '宮城', region: 'tohoku', x: 91.12, y: 37.55, w: 8.62, h: 8.71 },
  { key: 'Akita', ko: '아키타', jp: '秋田', region: 'tohoku', x: 82.5, y: 28.84, w: 8.62, h: 8.71 },
  { key: 'Yamagata', ko: '야마가타', jp: '山形', region: 'tohoku', x: 82.5, y: 37.55, w: 8.62, h: 8.71 },
  { key: 'Fukushima', ko: '후쿠시마', jp: '福島', region: 'tohoku', x: 91.12, y: 46.27, w: 8.62, h: 8.71 },
  { key: 'Ibaraki', ko: '이바라키', jp: '茨城', region: 'kanto', x: 93.05, y: 54.98, w: 6.69, h: 17.63 },
  { key: 'Tochigi', ko: '도치기', jp: '栃木', region: 'kanto', x: 86.62, y: 54.98, w: 6.44, h: 8.71 },
  { key: 'Gunma', ko: '군마', jp: '群馬', region: 'kanto', x: 80.18, y: 54.98, w: 6.44, h: 8.71 },
  { key: 'Saitama', ko: '사이타마', jp: '埼玉', region: 'kanto', x: 80.18, y: 63.69, w: 12.87, h: 8.92 },
  { key: 'Chiba', ko: '치바', jp: '千葉', region: 'kanto', x: 93.05, y: 72.61, w: 6.69, h: 17.43 },
  { key: 'Tokyo', ko: '도쿄', jp: '東京', region: 'kanto', x: 80.18, y: 72.61, w: 12.87, h: 8.71 },
  { key: 'Kanagawa', ko: '가나가와', jp: '神奈川', region: 'kanto', x: 80.18, y: 81.33, w: 8.62, h: 8.71 },
  { key: 'Niigata', ko: '니가타', jp: '新潟', region: 'chubu', x: 80.18, y: 46.27, w: 10.94, h: 8.71 },
  { key: 'Toyama', ko: '도야마', jp: '富山', region: 'chubu', x: 71.56, y: 46.27, w: 8.62, h: 8.71 },
  { key: 'Ishikawa', ko: '이시카와', jp: '石川', region: 'chubu', x: 65.12, y: 46.27, w: 6.44, h: 11.83 },
  { key: 'Fukui', ko: '후쿠이', jp: '福井', region: 'chubu', x: 56.37, y: 46.27, w: 8.75, h: 8.71 },
  { key: 'Yamanashi', ko: '야마나시', jp: '山梨', region: 'chubu', x: 71.56, y: 72.61, w: 8.62, h: 8.71 },
  { key: 'Nagano', ko: '나가노', jp: '長野', region: 'chubu', x: 71.56, y: 54.98, w: 8.62, h: 17.63 },
  { key: 'Gifu', ko: '기후', jp: '岐阜', region: 'chubu', x: 65.12, y: 58.09, w: 6.44, h: 11.41 },
  { key: 'Shizuoka', ko: '시즈오카', jp: '静岡', region: 'chubu', x: 71.56, y: 81.33, w: 8.62, h: 8.71 },
  { key: 'Aichi', ko: '아이치', jp: '愛知', region: 'chubu', x: 65.12, y: 69.5, w: 6.44, h: 11.83 },
  { key: 'Mie', ko: '미에', jp: '三重', region: 'kansai', x: 60.75, y: 63.69, w: 4.38, h: 17.63 },
  { key: 'Shiga', ko: '시가', jp: '滋賀', region: 'kansai', x: 56.37, y: 54.98, w: 8.75, h: 8.71 },
  { key: 'Kyoto', ko: '교토', jp: '京都', region: 'kansai', x: 47.75, y: 46.27, w: 8.62, h: 17.43 },
  { key: 'Osaka', ko: '오사카', jp: '大阪', region: 'kansai', x: 47.75, y: 63.69, w: 8.62, h: 17.63 },
  { key: 'Hyogo', ko: '효고', jp: '兵庫', region: 'kansai', x: 41.18, y: 46.27, w: 6.56, h: 20.33 },
  { key: 'Nara', ko: '나라', jp: '奈良', region: 'kansai', x: 56.37, y: 63.69, w: 4.38, h: 17.63 },
  { key: 'Wakayama', ko: '와카야마', jp: '和歌山', region: 'kansai', x: 49.03, y: 81.33, w: 14.54, h: 8.71 },
  { key: 'Tottori', ko: '돗토리', jp: '鳥取', region: 'chugoku', x: 34.75, y: 46.27, w: 6.44, h: 10.17 },
  { key: 'Shimane', ko: '시마네', jp: '島根', region: 'chugoku', x: 28.19, y: 46.27, w: 6.56, h: 10.17 },
  { key: 'Okayama', ko: '오카야마', jp: '岡山', region: 'chugoku', x: 34.75, y: 56.43, w: 6.44, h: 10.17 },
  { key: 'Hiroshima', ko: '히로시마', jp: '広島', region: 'chugoku', x: 28.19, y: 56.43, w: 6.56, h: 10.17 },
  { key: 'Yamaguchi', ko: '야마구치', jp: '山口', region: 'chugoku', x: 21.75, y: 46.27, w: 6.44, h: 20.33 },
  { key: 'Tokushima', ko: '도쿠시마', jp: '徳島', region: 'shikoku', x: 33.59, y: 81.33, w: 11.84, h: 8.71 },
  { key: 'Kagawa', ko: '가가와', jp: '香川', region: 'shikoku', x: 33.59, y: 72.61, w: 11.84, h: 8.71 },
  { key: 'Ehime', ko: '에히메', jp: '愛媛', region: 'shikoku', x: 21.75, y: 72.61, w: 11.84, h: 8.71 },
  { key: 'Kochi', ko: '고치', jp: '高知', region: 'shikoku', x: 21.75, y: 81.33, w: 11.84, h: 8.71 },
  { key: 'Fukuoka', ko: '후쿠오카', jp: '福岡', region: 'kyushu', x: 13, y: 48.76, w: 6.44, h: 10.37 },
  { key: 'Saga', ko: '사가', jp: '佐賀', region: 'kyushu', x: 6.56, y: 48.76, w: 6.44, h: 10.37 },
  { key: 'Nagasaki', ko: '나가사키', jp: '長崎', region: 'kyushu', x: 0.13, y: 48.76, w: 6.44, h: 10.37 },
  { key: 'Kumamoto', ko: '구마모토', jp: '熊本', region: 'kyushu', x: 6.56, y: 59.13, w: 6.44, h: 20.75 },
  { key: 'Oita', ko: '오이타', jp: '大分', region: 'kyushu', x: 13, y: 59.13, w: 6.44, h: 10.37 },
  { key: 'Miyazaki', ko: '미야자키', jp: '宮崎', region: 'kyushu', x: 13, y: 69.5, w: 6.44, h: 10.37 },
  { key: 'Kagoshima', ko: '가고시마', jp: '鹿児島', region: 'kyushu', x: 10.68, y: 79.88, w: 8.75, h: 10.17 },
  { key: 'Okinawa', ko: '오키나와', jp: '沖縄', region: 'okinawa', x: 0.13, y: 89.63, w: 6.44, h: 10.37 }
];
