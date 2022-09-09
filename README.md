npm i -g nodemon
nodemon 파일이름

### 미들웨어

미들웨어를 통과한뒤 routing에 도착
미들웨어를 순서대로 통과후 next()가 있어야 다음으로 넘어감

### static파일(html, img) 불러오기

이미지 저장
html에 이미지 부르기
server.use(express.static())으로 이미지가 어딨는지 알려주기

# 5. Template Engine

Template Engine을 통하여서 반복적으로 html을 생성하는대신 하나의 html에서 데이터만 바꿀수 있다.
npm i express-handlebars
partialsDir: 반복적인 코드를 쉐어링할수 있게 경로설정
템플릿 파일들은 모두 views폴더 안에 넣기 (노드가 템플릿을 사용할때 자동으로 views폴더 안을 찾기 때문)

html
css같은건 public에, html 템플릿은 views안에

# 6.

nodemon server.js --ext .js,.hbs
js, hbs로 끝나는걸 감시

서버에 페이지 요청을하면server.get(), 서버가 파일을 불러옴 res.render
server에서 보낸 object를 통해서 html를 변형할 수 있다.

handlebar

### partial

{{> head}}

### if

```js
{{#if home}}active{{/if}}
```

### each

```js
{{#each list}}
    <li>{{this}}</li>
{{/each}}
```
