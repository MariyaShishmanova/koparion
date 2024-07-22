export default function Section({ children, className }) {
  return (
    <section className={`section ${className}`}>
      <div className="container">
        <div className={`section__inner ${className}__inner`}>
          {children}
        </div>
      </div>
    </section>
  );
}
