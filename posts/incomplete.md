---
title: 실패가 아닌 미완성
image: incomplete.jpg
date: '20240427'
---

G-Check라고 이름 지은 프로젝트의 중간 회고를 작성하고자 한다.
중간 회고인 이유는 이 프로젝트를 앞으로 더 발전시키고, 리펙토링 하고 싶기 때문이다.

_(배포를 했지만 NextAuth 인증 이슈로 인해 지금은 이용이 불가능하다..)_

### **NextJS를 잘 활용했는가?**

사용하려는 목적에 사용했지만 정말 잘 활용했는가 물어본다면 긍정적으로 답은 못할 거 같다.
이유는 nextjs라는 도구를 완전히 나의 도구로 만들지 못하고 약간 끌려다니는 듯한 느낌도 받았다. 이번 프로젝트를 시작하기전에 SSR, CSR 에 대해서 학습을 했지만 실제로 사용할때 제일 많이 했던 고민은 이걸 서버사이드에서 돌리는게 맞나? 클라이언트 사이드에서 이 작업을 수행하는게 효율적인가? 이런 고민을 제일 많이 했던거 같다.

---

### **그러면 언제 SSR, CSR을 사용하면 좋을까?**

> #### 이때는 SSR을 생각해보자

- **SEO 최적화**: SSR은 페이지의 초기 로딩 시 모든 콘텐츠가 서버에서 렌더링되므로, 검색 엔진이 페이지 콘텐츠를 쉽게 크롤링하고 인덱싱할 수 있습니다. 동적인 데이터를 다루는 페이지나, 콘텐츠 기반의 사이트에서 SEO 접근성이 중요할 때 SSR을 사용하는 것이 유리합니다.
- **향상된 퍼포먼스**: 초기 페이지 로드 시 사용자에게 보여질 컨텐츠가 미리 준비되어 있기 때문에, 클라이언트 사이드에서 추가적인 데이터를 기다릴 필요가 없어 사용자 경험이 개선됩니다. 특히 네트워크 속도가 느린 환경에서 사용자가 첫 페이지를 빠르게 볼 수 있습니다.
- **초기 로드 시 데이터가 필요한 페이지**: 사용자가 처음 방문했을 때 바로 필요한 정보를 보여줘야 하는 서비스에서 SSR을 활용하면 유리합니다. 예를 들어, 상품 목록이나 기사 콘텐츠 등을 바로 보여줘야 하는 경우가 해당됩니다.

> #### 이런 상황에는 CSR을 사용해보자

- **리치 인터랙션**: 싱글 페이지 애플리케이션(SPA)처럼 동적인 상호작용이 많고, 페이지 간의 빠른 전환을 요구하는 웹 애플리케이션에 적합합니다. CSR을 사용하면, 서버로부터 한 번에 필요한 데이터를 로드한 후, 사용자와의 상호작용에 따라 클라이언트 사이드에서 즉각적으로 화면을 업데이트할 수 있습니다.
- **프론트엔드 성능 최적화**: 클라이언트의 리소스를 활용하여 서버의 부하를 줄일 수 있습니다. 사용자의 기기에서 스크립트를 실행하여 페이지를 렌더링하기 때문에 서버는 API 데이터 제공에 집중할 수 있으며, 사용자 경험을 더 부드럽게 만듭니다.
- **초기 로드 시간 민감하지 않은 애플리케이션**: 사용자가 앱의 초기 로딩 시간에 민감하지 않거나, 일단 애플리케이션이 로드되면 그 후의 상호작용이 매우 빠르게 이루어져야 하는 경우 CSR을 사용하는 것이 좋습니다.

---

_위 내용은 GPT가 알려준 내용이고 나의 프로젝트에서 사용했던 경험을 가지고 한번 작성해보겠다._

### SSR

```js
// pages/dashboard/index.js
export async function getServerSideProps() {
  const emails = await getEmails(); // 이메일 데이터를 서버에서 미리 가져옵니다.
  return {
    props: {
      emails,
    },
  };
}
```

**사용 이유**

- **빠른 초기 로딩**: G-Check에서 이메일 목록은 프로젝트에서 굉장히 중요했다. SSR을 통해 이메일의 초기 목록을 서버에서 미리 렌더링함으로써, 빠른 초기 로딩을 기대했다.

_초기 로딩이 빨라진다면 G-Check 사용자가 처음 페이지에 접속했을 때 바로 이메일을 볼 수 있고. 이로 인해 사용자 경험이 개선될거라고 생각했다._

### CSR

```js
// components/EmailList.js
useEffect(() => {
  const fetchData = async () => {
    const result = await fetchEmails();
    setEmails(result);
  };
  fetchData();
}, []);
```

**사용 이유**

- **동적인 상호작용 지원**: G-Check 사용자의 인터랙션에 따라 실시간으로 이메일 목록을 업데이트할 필요가 있었다. CSR을 통해 사용자의 요청에 따라 새로운 데이터를 불러오고, 이를 페이지에 동적으로 반영할 수 있었다.

### 결론

G-Check 프로젝트에서는 SSR과 CSR을 혼합하여 사용하고 있다. SSR은 주로 초기 페이지 로드 성능 향상을 위해, CSR은 사용자 경험을 개선하고 페이지의 동적 기능을 지원하기 위해 사용되고 있다.

#### **백엔드 시스템 구축은 성공적이었을까?**

이 부분은 GPT에게 많은 도움을 받았다 지금 나의 코드가 적절하다고 스스로 판단 할수는 없을 것 같다. 다만 작성된 코드를 수정하고 리펙토링 해보면서 간단한 백엔드 시스템 구축에 대한 이해는 어느정도 된거같다.

#### **무한 스크롤, 페이징 처리?**

이 부분은 프로젝트에서 제일 완벽하지 않은 부분중에 하나이다 앞으로 계속 리펙토링 하면서 보완한 후에 작성하도록 하겠다.

---

_그렇게 대단하고 큰 프로젝트는 아니다, 오히려 작고 간단한 프로젝트 이지만 완성하지 못한 부분이 제일 아쉬운 부분이다. 하지만 실패가 아닌 미완성이기 때문에 괜찮다._
