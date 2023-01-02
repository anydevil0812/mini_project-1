# 기본적인 웹페이지 구현 미니 프로젝트

<p align="center"><img src="https://user-images.githubusercontent.com/109947297/210203169-ffa2ed54-6bae-4e43-9714-2f7c32914990.jpg" height="250"><p>

### [진행 기간]

- 2022.11.9 ~ 2022.11.12

### [프로젝트 소개]

부트캠프에서 기본적인 <b>프론트엔드 커리큘럼(HTML, CSS, JavaScript, React)</b>을 마치고 나서 이전에 배웠던 <b>Java(Eclipse)</b>와 결합해 **간단한 웹페이지**를 만들어봄으로써 기본적인 **백엔드-프론트엔드 연결** 성공을 구현해보는 미니 프로젝트였습니다.

**파이널 프로젝트를 함께 진행하게 될 멤버들**로 각 팀을 나눠 실습해 보았는데 저는 **백엔드**를 맡았습니다.

백엔드에서는 **MySQL**을 사용하여 함께 **DB를 세팅**한 뒤 <b>Java(Eclipse)</b>를 사용하여 <b>고양이 정보(Cat)</b> 데이터와 <b>고양이 이미지(Picture)</b> 데이터에 대한 각각의 **MVC 패턴 구현에 따라 역할을 분배**하여 작업을 진행한 뒤 **최종적으로 프론트와 정상적으로 연동하여 백엔드에서 정의한 메소드를 프론트에서도 정상적으로 실행할 수 있도록** 성공시키는 것이 목표였습니다.

결과적으로 목표를 달성하여 시각적으로 결과물이 확연하게 보이는 **웹페이지 구현도 좋았지만** 파이널 프로젝트 진행전에 **파이널 프로젝트를 함께할 멤버들과 해당 미니 프로젝트를 통해 처음으로 협업해보면서 앞으로 파이널 프로젝트 진행 중에 겪게 될 문제들을 미리 경험**하여 파이널 프로젝트에서는 더 유연하고 능숙하게 협업을 진행할 수 있을 것 같은 느낌이 들어 만족스러웠습니다.   

### [프로젝트 진행 중 겪은 문제점 및 아쉬웠던 점]
### 개발 문제

1. Eclipse에서 백엔드-프론트엔드 연결시 필요한 **jdbc 라이브러리들을 Build Path 설정의 외부 라이브러리 추가를 통해 적용**하였는데 **서버 실행 시 해당 라이브러리들이 인식이 안되는 문제**가 발생했었습니다.
<br><br> ⇒ **jdbc 라이브러리들을** 프로젝트에 Build Path 설정을 통하여 추가하는 것이 아니라 **프로젝트의 WebContent폴더의 WEB-INF 폴더의 lib 폴더에 넣어줘야 인식이 가능**하다는 것을 뒤늦게 깨닫고 이를 적용하여 서버를 실행하니 정상적으로 인식되어 해결하였습니다.

2. **데이터 타입을 String 타입**으로 프론트에 보냈을 때는 **JavaScript에서 데이터를 제대로 받지 못하는 문제**가 발생했었습니다.
<br><br> ⇒ 데이터를 **JSON 객체로 변환해서 보내주니** **JavaScript에서 데이터를 받을 수 있음을 확인**하며 문제를 해결했습니다. (**API의 특징**)

3. 데이터 타입을 **Java 객체 타입**으로 프론트에 보냈을 때는 **JavaScript에서 데이터를 제대로 받지 못하는 문제**가 발생했었습니다.
<br><br> ⇒ **Java 객체에서 JSON을 생성하고 생성된 JSON을 문자열 또는 바이트 배열로 반환**하는 **ObjectMapper** 클래스의 **writeValueAsString 및 writeValueAsBytes** 메소드를 적용하여 해결하였습니다.

4. 노트북으로 작업 중 **셀프로 서버-클라이언트 전송을 테스트**할때 **CORS Error**가 발생했었습니다.
<br><br> ⇒ <b>setHeader("Access-Control-Allow-Origin", "프론트엔드 URL")</b>을 입력하여 **도메인 간 요청을 할 수 있는 권한이 부여된 도메인을 지정**해줌으로써 해결하였습니다.

5. React에서 **fetch나 axios**로 받아온 데이터를 **.then()에서 바로 참조를 이용하여 특정값을 불러오려 했을 때** **참조되지 않은 문제**가 발생했었습니다.
<br><br> ⇒ 참조를 위해서는 **.then()에서** **setState를 이용하여 특정 객체에 담은 후 외부에서 해당 객체를 참조**하니 해결되었습니다.

6. **git commit 및 pull**을 하고난 후 갑자기 Apache Tomcat **서버 구동이 안되는 것은 물론** 프로젝트에 있던 **Java 라이브러리들이 모두 사라지는 문제**를 경험했었습니다.
<br><br> ⇒ **classpath 파일 내용이 바뀌어 있었던 것이 원인이라** 변경 전 코드를 복사하여 **classpath 파일**에 붙여 넣어 원래 내용을 **복원하니 없어졌던 라이브러리가 다시 나타났고 서버도 다시 잘 구동**되며 문제가 해결되었습니다.

![https://blog.kakaocdn.net/dn/mpMdR/btrQ1gEU2P3/qj6VdzkTzFLCetxwpoHjN0/img.png](https://blog.kakaocdn.net/dn/mpMdR/btrQ1gEU2P3/qj6VdzkTzFLCetxwpoHjN0/img.png)

### 깨달은 점

1. 팀원들 간에 **git clone한 레퍼지토리의 위치가 서로 달라서** 그런지 git pull을 해올 때마다 인코딩이 수정한 **UTF-8**이 아닌 Eclipse 기본값인 **MS949**로 설정되어있어 **git pull만 하면 한글이 깨져** 있었는데 본격적인 코딩 시작 전에 **팀원들끼리 합의하여 동일한 작업 환경을 세팅**해야 함을 뼈저리게 느꼈습니다.

2. **HttpServletResponse 객체**(response)에 텍스트 혹은 바이너리 데이터만 출력할 수 있기 때문에 보통 **데이터 타입을 String으로 변환하는 것이 필수**임을 알게 되었습니다.
