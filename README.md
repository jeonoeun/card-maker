# Card Maker
최근 인상 깊게 본 영화 ‘Everything Everywhere All at Once’에서 영감을 받아 제작한 프로젝트입니다. ‘멀티버스(다중 우주)’라는 설정을 바탕으로, 다른 우주 속 또 다른 나의 모습을 카드 형식으로 만들어보는 카드 메이커 프로젝트입니다.

## 프로젝트 개요
- **작업 기간**: 2023.01
- **진행 방식**: 개인 프로젝트 (기여도 100%)
- **배포 링크**: https://rococo-lamington-8b84b3.netlify.app

## 기술 스택
- **Backend / Auth**: Firebase
- **Frontend**: React
- **Image Upload / Storage**: Cloudinary
- **Styling**: CSS Modules
- **Deployment**: Netlify

## 주요 기능

### 1. 로그인

<img src="./public/images/github01.png" alt=" " />

- `firebase`를 활용해 로그인 기능을 구현했습니다. 사용자가 로그인 버튼을 클릭하면 선택한 `provider`(예: Google)로 인증이 진행되며, `signInWithPopup()`을 통해 인증 결과를 받아 사용자 정보를 획득합니다.

  ```jsx
  login(providerName) {
    const authProvider = this.getProvider(providerName);
    return firebaseAuth.signInWithPopup(authProvider);
  }
  ```

### 2. 카드 실시간 편집 및 미리보기

<img src="./public/images/github02.png" alt=" " />

- 카드 정보는 `firebase realtime database`에 사용자별(`userId`)로 저장되며, 카드 작성 시 `ref(userId/cards/cardId)` 경로에 데이터를 저장합니다.

  ```jsx
  saveCard(userId, card) {
    firebaseDatabase.ref(`${userId}/cards/${card.id}`).set(card);
  }
  ```

- `input` 값이 변경될 때마다 `updateCard()` 함수가 호출되며, 변경된 내용을 바로 데이터베이스에 반영하고 해당 데이터를 `Preview` 컴포넌트에서 **실시간으로 확인**할 수 있도록 구현했습니다.

  ```jsx
  updateCard({
    ...card,
    [event.currentTarget.name]: event.currentTarget.value,
  });
  ```

- 저장된 카드 정보는 `firebase`를 통해 텍스트 등 일반 데이터가 관리되고, 이미지 업로드는 `cloudinary`를 사용해 처리하며, 두 서비스를 연동해 카드 내용을 자유롭게 수정하고 미리 볼 수 있도록 했습니다.
