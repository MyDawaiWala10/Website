
export const metadata = {
  title: "Product Details",
  description: "Product detail page for MyDawaiWala platform",
};

export default function RootLayout({ children }) {
  return (
        <section className="max-w-6xl min-h-screen flex flex-col justify-center items-center mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </section>
  );
}