---
title: NEXT.JS 튜토리얼 폴더 구조 분석
image: folder-structure.jpg
date: '2024-4-4'
---

nextjs 공식문서에 있는 튜토리얼을 진행하면서 공부하다가 폴더구조에 관심이 생겨서 분석하게 되었다. 사실 여태까지 폴더구조에 관심이 크게 없어서 그런지 이게 좋은 구조인지는 잘 모르겠지만 공식문서 튜토리얼에서 이런 구조를 채택했다는건 이유가 있지 않을까 싶은 마음에 이걸 베이스로 공부하기로 결정했다.

## nextjs dashboard 폴더구조

```js
app
 ┣ dashboard
 ┃ ┣ (overview)
 ┃ ┃ ┣ loading.tsx
 ┃ ┃ ┗ page.tsx
 ┃ ┣ customers
 ┃ ┃ ┗ page.tsx
 ┃ ┣ invoices
 ┃ ┃ ┣ [id]
 ┃ ┃ ┃ ┗ edit
 ┃ ┃ ┃ ┃ ┣ not-fount.tsx
 ┃ ┃ ┃ ┃ ┗ page.tsx
 ┃ ┃ ┣ create
 ┃ ┃ ┃ ┗ page.tsx
 ┃ ┃ ┣ error.tsx
 ┃ ┃ ┗ page.tsx
 ┃ ┗ layout.tsx
 ┣ lib
 ┃ ┣ action.ts
 ┃ ┣ data.ts
 ┃ ┣ definitions.ts
 ┃ ┣ placeholder-data.js
 ┃ ┗ utils.ts
 ┣ login
 ┃ ┗ page.tsx
 ┣ ui
 ┃ ┣ customers
 ┃ ┃ ┗ table.tsx
 ┃ ┣ dashboard
 ┃ ┃ ┣ cards.tsx
 ┃ ┃ ┣ latest-invoices.tsx
 ┃ ┃ ┣ nav-links.tsx
 ┃ ┃ ┣ revenue-chart.tsx
 ┃ ┃ ┗ sidenav.tsx
 ┃ ┣ invoices
 ┃ ┃ ┣ breadcrumbs.tsx
 ┃ ┃ ┣ buttons.tsx
 ┃ ┃ ┣ create-form.tsx
 ┃ ┃ ┣ edit-form.tsx
 ┃ ┃ ┣ pagination.tsx
 ┃ ┃ ┣ status.tsx
 ┃ ┃ ┗ table.tsx
 ┃ ┣ acme-logo.tsx
 ┃ ┣ button.tsx
 ┃ ┣ fonts.ts
 ┃ ┣ global.css
 ┃ ┣ home.module.css
 ┃ ┣ login-form.tsx
 ┃ ┣ search.tsx
 ┃ ┗ skeletons.tsx
 ┣ layout.tsx
 ┗ page.tsx
```

> 이 폴더 구조는 어플리케이션의 다양한 부분을 구성하는 파일과 디렉토리를 보여준다. 크게 애플리케이션 로직(app, lib), 사용자 인터페이스(ui), 그리고 레이아웃 및 페이지 관련 파일(layout.tsx, page.tsx)로 구분할 수 있다.

### app 디렉토리

**_dashboard_** : 대시보드 관련 컴포넌트 및 페이지를 포함한다. 여기에는 _overview_, _customers_, _invoices_ 등 대시보드의 다양한 섹션이 포함됩니다. 각 섹션은 자신의 _page.tsx_ 파일을 가지고 있어 해당 섹션의 메인 페이지를 정의한다.

- **_overview_** : 대시보드의 개요 부분을 나타낸다. _loading.tsx_ 와 _page.tsx_ 를 포함하여 로딩 상태와 개요 페이지를 관리한다.
- **_customers_** : 고객 정보와 관련된 페이지를 포함한다.
- **_invoices_** : 인보이스 관련 페이지를 포함한다. 여기에는 인보이스 생성(create), 편집([id]/edit), 오류 처리(error.tsx) 등이 포함된다.

### lib 디렉토리

- 애플리케이션에서 사용되는 다양한 라이브러리 함수, 유틸리티, 정의 등을 포함한다. 예를 들어, _action.ts_, _data.ts_, _definitions.ts_ 등이 있으며, 이들은 데이터 처리, 타입 정의 등의 기능을 제공한다.

### login 디렉토리

- 로그인 페이지와 관련된 컴포넌트 및 로직을 포함한다. _page.tsx_ 파일이 로그인 페이지를 정의한다.

### ui 디렉토리

- 사용자 인터페이스 요소를 포함한다. 버튼, 테이블, 폼, 네비게이션 링크 등과 같은 재사용 가능한 UI 컴포넌트가 이 디렉토리 안에 정의되어 있다.
- _dashboard_, _customers_, _invoices_ 등의 서브 디렉토리는 특정 애플리케이션 영역에 대한 UI 컴포넌트를 포함한다.

### 최상위 파일들

- **_layout.tsx_** : 애플리케이션의 전반적인 레이아웃을 정의하는 컴포넌트이다.
- **_page.tsx_** : 애플리케이션의 기본 페이지 또는 메인 페이지를 정의할 수 있는 컴포넌트이다.

> 이 폴더 구조는 _app_, _lib_, _ui_ 와 같은 폴더들이 특정 기능이나 관심사에 따라 그룹화되어 있어 기능별 폴더 구조의 특성을 많이 담고 있는 거 같다.
