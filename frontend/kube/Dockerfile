# Node.js 이미지를 기반으로 하는 빌드 스테이지
FROM node:18.19.0 as builder
WORKDIR /app

# .env 파일 경로를 빌드 인자로 받습니다.
ARG ENV_FILE=.env

# .env 파일의 내용을 환경 변수로 설정합니다.
COPY $ENV_FILE .env
RUN export $(cat .env | xargs)

# 패키지 파일 복사 후 의존성 설치
COPY package*.json .
RUN npm ci

# 소스 코드 복사
COPY . .

# 디렉토리 내용 확인 (디버깅 용)
RUN ls -al

# 프로젝트 빌드
RUN npm run build

# Nginx를 사용하는 서빙 스테이지
FROM nginx:latest
WORKDIR /usr/share/nginx/statics

# 기본 Nginx 설정 파일 제거 후 커스텀 설정 파일 복사
RUN rm /etc/nginx/conf.d/default.conf
COPY ../nginx.conf /etc/nginx/conf.d

# 빌드된 정적 파일 복사
COPY --from=builder /app/dist .

# 80 포트 노출
EXPOSE 80

# Nginx 실행
CMD ["nginx", "-g", "daemon off;"]
