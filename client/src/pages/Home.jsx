import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="px-6 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
          Welcome to QuickCart
        </h1>

        <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
          Shop your favorite products with easy cart, quick checkout, and a
          smooth shopping experience.
        </p>

        <Link
          to="/products"
          className="inline-block mt-8 bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700"
        >
          Shop Now
        </Link>
      </section>

      <section className="px-6 pb-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold">Fast Shopping</h3>
          <p className="mt-2 text-gray-600">
            Browse products quickly with search, filter and sorting options.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold">Easy Cart</h3>
          <p className="mt-2 text-gray-600">
            Add items to cart, update quantity and calculate total price.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold">Dummy Payment</h3>
          <p className="mt-2 text-gray-600">
            Place orders using a simple checkout and dummy payment section.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;