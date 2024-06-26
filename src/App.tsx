import Link from "./components/Link";
import Logo from "./components/Logo";
import pdf from "./assets/ChandraMouliVayiletiResume.pdf";

function App() {
  return (
    <div className="max-w-2xl mx-auto text-neutral-300 p-[0.5px] px-6">
      <nav className="py-5">
        <a
          href="/portfolio"
          className="before:content-[''] relative before:absolute before:-bottom-2 before:left-0 before:right-0 before:w-full before:h-[3px] before:bg-neutral-400 inline-block outline-none before:hidden focus-visible:before:block"
        >
          <Logo />
        </a>
      </nav>
      <main className="mx-auto my-5 md:my-10">
        <h1 className="text-3xl font-black text-white">Chandra Mouli</h1>
        <div className="my-6">
          <p>Hey, I am Chandra Mouli, a fantastic web developer.</p>
        </div>
        <div className="my-6 flex flex-col gap-[3px]">
          <p>
            Working at&nbsp;
            <Link href="ttps://yallas.tech/">@Yallas</Link>.
          </p>
          <p>
            Creator of&nbsp;
            <Link href="https://chandra-moulii.github.io/crispthoughtscorner">
              CrispThoughtsCorner
            </Link>
            ,&nbsp;
            <Link href="https://url-shortenerr.vercel.app/">Shortify</Link>
            ,&nbsp;
            <Link href="https://todo-list-appp.web.app/">Todo-List&nbsp;</Link>
            and&nbsp;
            <Link href="https://github.com/Chandra-Moulii">others</Link>.
          </p>
        </div>
        <div>
          <p className="leading-relaxed">
            Dreaming up ideas and making them come true is where my passion
            lies. You can&nbsp;
            <Link href="https://github.com/Chandra-Moulii">
              find my full projects&nbsp;
            </Link>
            list here. I also do some codepens on&nbsp;
            <Link href="https://codepen.io/v_chandramouli">codepen.io</Link>
            &nbsp;occasionally.
          </p>
        </div>
        <div className="my-6">
          <p className="leading-relaxed">
            Outside of programming, I enjoy playing badminton and traveling. If
            you happen to be in the same city I live (currently in
            Visakhapatnam), maybe we can hang out and take some photos or code
            together.
          </p>
        </div>
        <div className="flex items-center gap-1">
          <a
            href={pdf}
            download="ChandraMouliVayiletiResume.pdf"
            className="text-white font-medium underline underline-offset-4 decoration-neutral-700 hover:decoration-white transition-colors duration-500 decoration-1 outline-none focus:decoration-white flex gap-2 items-center"
          >
            <svg
              viewBox="0 -960 960 960"
              className="w-5 aspect-square fill-neutral-400"
            >
              <path d="M320-240h320v-80H320v80Zm0-160h320v-80H320v80ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z" />
            </svg>
            <p>Download Resume</p>
          </a>
        </div>
        <div className="my-7">
          <p>Find me on</p>
          <div className="flex items-center gap-4 flex-wrap">
            <div className="mt-3 inline-block">
              <Link href="https://github.com/Chandra-Moulii">
                <div className="flex gap-2 items-center">
                  <svg
                    viewBox="0 0 16 16"
                    className="w-5 aspect-square fill-neutral-400"
                  >
                    <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
                  </svg>
                  <p>GitHub</p>
                </div>
              </Link>
            </div>
            <div className="mt-3 inline-block">
              <Link href="https://codepen.io/v_chandramouli">
                <div className="flex gap-1 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    className="w-6 aspect-square fill-neutral-400"
                  >
                    <path d="M 16 2.84375 L 15.4375 3.21875 L 3.4375 11.25 L 3 11.53125 L 3 20.46875 L 3.4375 20.75 L 15.4375 28.78125 L 16 29.15625 L 16.5625 28.78125 L 28.5625 20.75 L 29 20.46875 L 29 11.53125 L 28.5625 11.25 L 16.5625 3.21875 Z M 15 5.90625 L 15 11.34375 L 9.84375 14.8125 L 5.8125 12.09375 Z M 17 5.90625 L 26.1875 12.09375 L 22.15625 14.8125 L 17 11.34375 Z M 16 13.09375 L 20.34375 16 L 16 18.90625 L 11.65625 16 Z M 5 13.9375 L 8.0625 16 L 5 18.0625 Z M 27 13.9375 L 27 18.0625 L 23.9375 16 Z M 9.875 17.1875 L 15 20.65625 L 15 26.09375 L 5.8125 19.90625 Z M 22.125 17.1875 L 26.1875 19.90625 L 17 26.09375 L 17 20.65625 Z" />
                  </svg>
                  <p>CodePen</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="my-10 block">
          <span className="text-neutral-500">2024-PRESENT © Chandra Mouli</span>
        </div>
      </main>
    </div>
  );
}

export default App;
