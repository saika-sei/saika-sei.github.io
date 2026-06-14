# Sei Irodori Blog

Astro 기반의 정적 블로그입니다. GitHub Pages 사용자 사이트(`https://saika-sei.github.io`)로 배포됩니다.

## 개발

```bash
npm install
npm run dev
```

## 빌드

```bash
npm run build
```

## 배포

`main` 브랜치에 push하면 `.github/workflows/deploy.yml`이 Astro를 빌드하고 GitHub Pages로 배포합니다.

댓글은 GitHub Issues 기반의 Utterances를 사용합니다. 저장소에서 Issues를 활성화하고 `.env` 또는 GitHub Actions 변수에 다음 값을 설정할 수 있습니다.

```bash
PUBLIC_COMMENTS_REPO=saika-sei/saika-sei.github.io
```
