#### 나만의 컴포넌트 폴더 구조

폴더 구조에는 제한이 없습니다.
ex) libs와 features, infra, sdk 등 자유롭게 폴더명을 구분해볼 것

1. **디자인 토큰에 영향이 없는 자주 사용하는 컴포넌트** ✅
   ex) Box, Spacer, input, button

2. **디자인 시스템 적용을 위한 모듈** ✅
   ex) Theme, globalStyle …

3. **통일성 있는 코드 포멧팅을 위한 eslint와 prettier** ✅

4. **api를 호출하 수 있는 http request 객체와 instance** ✅
   ex) const createAxiosInstance = () ⇒ axios.create({})

5. **전역 상태 관리 라이브러리와 ui 라이브러리** ✅

6. **day.js, moment.js, luxon과 같이 시간 관련 파싱 라이브러리** ✅

7. **자주 사용하는 유틸 함수와 커스텀 훅 함수** ✅

_주의사항_

중요한 것은 여러분들이 앞으로 프로젝트를 만든다 하였을 때 가장 먼저 셋팅할 수 있는 상태로 만드는 것이 가장 중요합니다**.
즉 보일러 템플릿이란** 나는 프로젝트를 시작하였을 때 내가 자주 사용하는 라이브러리로 프로젝트를 위한 준비를 위한 준비를 이렇게 한다고 생각하면 좋아요 :)
