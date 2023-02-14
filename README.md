# 기본적인 웹페이지 구현 미니 프로젝트

<p align="center"><img src="https://user-images.githubusercontent.com/109947297/210203169-ffa2ed54-6bae-4e43-9714-2f7c32914990.jpg" height="250"><p>

### [프로젝트 소개]

부트캠프에서 기본적인 프론트엔드 커리큘럼(HTML, CSS, JavaScript, React)을 마치고 나서 이전에 배웠던 Java(Eclipse)와 결합해 간단한 웹페이지를 만들어봄으로써 기본적인 백엔드-프론트엔드 연결 성공을 구현해보는 미니 프로젝트였습니다.

**[진행 기간]**
- 2022.11.9 ~ 2022.11.12

**[팀 구성]**
- 프론트엔드 2명, 백엔드 2명

**[맡은 역할 - 백엔드]**
- MySQL을 이용한 DB 세팅
- Java(Eclipse)를 사용하여 고양이 정보(Cat) 데이터와 고양이 이미지(Picture) 데이터에 대한 각각의 MVC 패턴 구현
- 프론트와 정상적으로 연동하여 백엔드에서 정의한 메소드를 프론트에서도 정상적으로 실행할 수 있도록 구현

**[소감]**

결과적으로 목표를 달성하여 시각적으로 결과물이 확연하게 보이는 웹페이지 구현도 좋았지만 파이널 프로젝트 진행 전에 파이널 프로젝트를 함께할 멤버들과 해당 미니 프로젝트를 통해 처음으로 협업해보면서 앞으로 파이널 프로젝트 진행 중에 겪게 될 문제들을 미리 경험하여 앞으로는 더 유연하고 능숙하게 협업을 진행할 수 있을 것 같은 느낌이 들어 만족스러웠습니다.

### [프로젝트 진행 중 겪은 문제점 및 아쉬웠던 점]
### 개발 문제

1. **[문제 내용]**<br>git pull만 하면 한글이 깨지는 현상이 발생<br><br>**[문제 원인]**<br>팀원들 간에 git clone한 레퍼지토리의 위치가 서로 달라서 그런지 git pull을 해올 때마다 인코딩이 수정한 UTF-8이 아닌 Eclipse 기본값인 MS949로 설정<br><br>**[해결 방법]**<br>팀원들끼리 합의하여 **동일한 작업 환경을 세팅**해여 해결

2. **[문제 내용]**<br>Eclipse에서 jdbc 라이브러리들을 Build Path 설정의 외부 라이브러리 추가를 통해 적용하였는데 서버 실행 시 해당 라이브러리들이 인식이 안되는 문제가 발생<br><br>**[문제 원인]**<br>jdbc 라이브러리들을 프로젝트에 Build Path 설정을 통하여 추가하는 것이 아니라 프로젝트의 **WebContent폴더의 WEB-INF 폴더의 lib 폴더**에 넣어줘야 인식이 가능했던 것<br><br>**[해결 방법]**<br>jdbc 라이브러리들을 프로젝트의 WebContent폴더의 WEB-INF 폴더의 lib 폴더에 넣어 해결

3. **[문제 내용]**<br>Java에서 데이터 타입을 String 타입으로 프론트에 보냈을 경우 JavaScript에서 데이터를 제대로 받지 못하는 문제가 발생<br><br>**[해결 방법]**<br>데이터를 JSON 객체로 변환해서 보내주니 해결 (**API의 특징**)

4. **[문제 내용]**<br>Java에서 데이터 타입을 Java 객체 타입으로 프론트에 보냈을 경우 JavaScript에서 데이터를 제대로 받지 못하는 문제가 발생<br><br>**[해결 방법]**<br>Java 객체에서 JSON을 생성하고 생성된 JSON을 문자열 또는 바이트 배열로 반환하는 **ObjectMapper** 클래스의 writeValueAsString 및 writeValueAsBytes 메소드를 적용하여 해결

5. **[문제 내용]**<br>로컬 환경에서 셀프로 서버-클라이언트 전송을 테스트할 때 **CORS Error**가 발생<br><br>[해결 방법]**<br>**setHeader**("Access-Control-Allow-Origin", "프론트엔드 URL")을 입력하여 도메인 간 요청을 할 수 있는 권한이 부여된 도메인을 지정해줌으로써 해결

6. **[문제 내용]**<br>React에서 fetch나 axios로 받아온 데이터를 **.then()**에서 바로 참조를 이용하여 특정값을 불러오려 했을 때 참조되지 않은 문제가 발생<br><br>**[해결 방법]**<br>.then()에서 **setState**를 이용하여 특정 객체에 담은 후 외부에서 해당 객체를 참조하니 해결

7. **[문제 내용]**<br>git commit 및 pull을 하고난 후 갑자기 Apache Tomcat 서버 구동이 안되는 것은 물론 프로젝트에 있던 Java 라이브러리들이 모두 사라짐<br><br>**[문제 원인]**<br>**classpath** 파일 내용이 바뀌어 있는 상태에서 commit 했던 것이 원인<br><br>**[해결 방법]**<br>변경 전 코드를 복사하여 classpath 파일에 붙여 넣어 원래 내용을 복원하여 문제 해결

![https://blog.kakaocdn.net/dn/mpMdR/btrQ1gEU2P3/qj6VdzkTzFLCetxwpoHjN0/img.png](https://blog.kakaocdn.net/dn/mpMdR/btrQ1gEU2P3/qj6VdzkTzFLCetxwpoHjN0/img.png)

### 깨달은 점

1. HttpServletResponse 객체(response)에 텍스트 혹은 바이너리 데이터만 출력할 수 있기 때문에 보통 데이터 타입을 String으로 변환하는 것이 필수임을 알게 되었음 
