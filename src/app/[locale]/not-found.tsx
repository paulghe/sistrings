import { Wordmark } from '@/components/Wordmark';

export default function NotFound() {
  return (
    <section className="grid min-h-[70vh] place-items-center px-6 text-center">
      <div>
        <Wordmark className="text-4xl" />
        <p className="mt-6 font-serif text-6xl text-secondary">404</p>
        <a
          href="/"
          className="btn mt-8 border-none bg-primary text-primary-content hover:bg-primary/85"
        >
          sistrings.com
        </a>
      </div>
    </section>
  );
}
