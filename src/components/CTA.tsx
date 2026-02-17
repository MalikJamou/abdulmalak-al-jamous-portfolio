interface CTAProps {
  headline: string;
  text: string;
  button: string;
  onAction?: () => void;
}

export default function CTA({ headline, text, button, onAction }: CTAProps) {
  return (
    <section className="bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-lg p-8 sm:p-12 text-center">
      <h2 className="text-3xl sm:text-4xl font-bold mb-4">{headline}</h2>
      <p className="text-lg text-slate-200 mb-8 max-w-2xl mx-auto">{text}</p>
      <button
        onClick={onAction}
        type="button"
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg transition inline-block focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        {button}
      </button>
    </section>
  );
}
