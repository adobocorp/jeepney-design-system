export function Footer({ children }: { children?: React.ReactNode }) {
  return (
    <footer className="w-full py-4 px-6 bg-color-base-white border-t border-color-base-grey-200 flex items-center justify-between">
      {children}
    </footer>
  );
}
