export default function Footer() {
  return (
    <footer className="border-t border-border-strong bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-6 text-sm text-text-muted sm:flex-row">
        <p className="font-semibold text-text-primary">IDI Center</p>
        <p>© {new Date().getFullYear()} تمامی حقوق محفوظ است.</p>
      </div>
    </footer>
  );
}
