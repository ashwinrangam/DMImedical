export default function Credibility() {
  const logos = ['Client Logo', 'Client Logo', 'Client Logo', 'Client Logo', 'Client Logo'];

  return (
    <section className="py-10 bg-white border-t border-b border-border">
      <div className="container mx-auto px-6">
        <h4 className="text-center font-semibold text-[hsl(var(--dark-navy))] mb-8">
          Trusted by healthcare facilities across the Midwest
        </h4>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="h-10 w-32 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-400"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}