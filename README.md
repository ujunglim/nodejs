npm i -g nodemon
nodemon 파일이름

### 미들웨어

미들웨어를 통과한뒤 routing에 도착
미들웨어를 순서대로 통과후 next()가 있어야 다음으로 넘어감

### static파일(html, img) 불러오기

이미지 저장
html에 이미지 부르기
server.use(express.static())으로 이미지가 어딨는지 알려주기
