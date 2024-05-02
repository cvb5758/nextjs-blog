import Link from 'next/link';

export default function Detail() {
  return (
    <article className="w-1/4 mx-auto p-2 flex flex-col items-center justify-center">
      <section className="w-full mx-8 p-4">
        <div className="bg-orange-200 w-full text-center rounded-lg">
          <span className="block p-4 text-gray-800">
            안녕, 나는 프론트엔드 개발자 이수민이야.
          </span>
        </div>
        <div className="w-full py-8 flex flex-col gap-1">
          <span className="text-4xl text-gray-800 font-bold">
            Sumin&apos;s SULOG{' '}
          </span>
          <span className="text-sm text-gray-500">
            - 개인적인 학습 기록 공간
          </span>
        </div>
      </section>
      <section
        className="
      w-full mx-8 p-4 flex flex-col items-start justify-center"
      >
        <h3 className="text-2xl font-bold text-gray-800 mb-4 pb-1 border-b-4 border-gray-400">
          Work
        </h3>
        <p className="text-gray-700 align-center indent-4">
          저는 프론트엔드 개발자로서 사용자 경험을 중요시하며, 사용자가 원활하게
          서비스를 이용할 수 있도록 노력합니다. 사용자의 입장에서 생각하고,
          사용자에게 필요한 정보를 제공하는 것을 목표로 합니다. 또한, 사용하는
          기술 스택에 대해 꾸준히 공부하고, 새로운 기술을 배우는 것을 즐깁니다.
        </p>
        {/* <div className="w-full flex items-center justify-center gap-4 mt-4">
          <Link
            href="/portfolio"
            className="text-gray-800 hover:text-gray-800 bg-gray-400 p-4 rounded-lg"
          >
            나의 포트폴리오
            <span className="transition-all duration-300 transform hover:translate-x-2 ml-2">
              &gt;
            </span>
          </Link>
        </div> */}
      </section>
      <section className="w-full m-24 p-4 flex flex-col items-center justify-center">
        <div
          className="
        bg-orange-200 w-full text-center rounded-lg p-16 border-4 border-red-400"
        >
          <span className="text-4xl font-bold text-red-900">
            공사 중입니다!
          </span>
        </div>
      </section>
    </article>
  );
}
