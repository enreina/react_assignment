import PreOrderMealForm from "@/components/PreOrderMealForm";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Meal Pre-Order</title>
        <meta name="description" content="A web app to pre-order meal" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-slate-100 flex flex-col items-center justify-center min-h-screen px-8">
        <main className="flex flex-col drop-shadow-xl rounded-xl bg-white min-h-[500px] p-4 pb-8 mt-auto w-full max-w-md">
          <PreOrderMealForm />
        </main>
        <footer className="attribution mt-auto p-4 text-xs text-center">
          <p>
            Coded by{" "}
            <a className="text-violet-600" href="https://github.com/enreina">
              Enreina
            </a>
            .
          </p>
        </footer>
      </div>
    </>
  );
}
