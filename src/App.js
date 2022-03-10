import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="container mx-auto">
      <div className="header flex justify-between border-b border-slate-300 py-2 text-sm">
        <div className="flex gap-8">
          <a href="#" className="text-lime-300">
            Chat with us
          </a>
          <p>+62 822 909 187</p>
          <p>info@leumangshop.com</p>
        </div>
        <div className="">
          <ul className="flex gap-8 text-lime-300">
            <li>Blog</li>
            <li>About Us</li>
            <li>Career</li>
          </ul>
        </div>
      </div>

      <div className="siteInfo flex justify-between pt-14 pb-10">
        <h1 className="text-3xl font-bold">LeumangShop</h1>
        <div className="flex w-full justify-center">
          <input
            type="text"
            className="bg-white-100 w-2/4 border-2 border-gray-200 rounded-2xl text-xl pl-3"
            placeholder="Search Products, categories ..."
          />
        </div>
        <div className="flex gap-5">
          <img src="/image/ic-user.png" className="w-7 h-7 self-center" />
          <div className="relative w-9 h-9">
            <img
              src="/image/ic-cart.png"
              className="w-full h-full self-center"
            />
            <div className="absolute -bottom-2 -left-1 text-xs bg-red-500 rounded-full w-4 h-4 text-center text-white">
              4
            </div>
          </div>
        </div>
      </div>

      <div className="siteMenu bg-slate-50 py-4 flex">
        <div className="mr-8">
          <a href="#" className="mr-2 font-bold">
            Bakery
          </a>
          <i class="fa fa-angle-down"></i>
        </div>
        <div className="mr-8">
          <a href="#" className="mr-2 font-bold">
            Fruit and vegetables
          </a>
          <i class="fa fa-angle-down"></i>
        </div>
        <div className="mr-8">
          <a href="#" className="mr-2 font-bold">
            Meat and fish
          </a>
          <i class="fa fa-angle-down"></i>
        </div>
        <div className="mr-8">
          <a href="#" className="mr-2 font-bold">
            Drinks
          </a>
          <i class="fa fa-angle-down"></i>
        </div>
        <div className="mr-8">
          <a href="#" className="mr-2 font-bold">
            Kitchen
          </a>
          <i class="fa fa-angle-down"></i>
        </div>
        <div className="mr-8">
          <a href="#" className="mr-2 font-bold">
            Special nutrition
          </a>
          <i class="fa fa-angle-down"></i>
        </div>
        <div className="mr-8">
          <a href="#" className="mr-2 font-bold">
            Baby
          </a>
          <i class="fa fa-angle-down"></i>
        </div>
        <div className="mr-8">
          <a href="#" className="mr-2 font-bold">
            Pharmacy
          </a>
          <i class="fa fa-angle-down"></i>
        </div>
      </div>

      <div className="flex pt-16">
        <div className="mr-28">
          <div className="Categories">
            <div className="font-bold pb-4">
              <h2>Categories</h2>
            </div>
            <div className="flex justify-between gap-24 text-sm pb-3">
              <p>Bolu</p>
              <p className="bg-slate-100 text-lime-600 font-bold rounded-xl px-2">
                320
              </p>
            </div>
            <div className="flex justify-between gap-24 text-sm pb-3">
              <p>Mie</p>
              <p className="bg-slate-100 text-lime-600 font-bold rounded-xl px-2">
                112
              </p>
            </div>
            <div className="flex justify-between gap-24 text-sm pb-3">
              <p>Pizza</p>
              <p className="bg-slate-100 text-lime-600 font-bold rounded-xl px-2">
                32
              </p>
            </div>
            <div className="flex justify-between gap-24 text-sm">
              <p>Dessert</p>
              <p className="bg-slate-100 text-lime-600 font-bold rounded-xl px-2">
                48
              </p>
            </div>
          </div>

          <div className="OrderBy mt-12">
            <div className="font-bold pb-4">
              <h2>Order By</h2>
            </div>
            <div className="text-sm pb-2">
              <input
                className="mr-2 accent-green-600"
                type="checkbox"
                value="Termurah"
                name="Termurah"
              />
              <label for="Termurah">Termurah</label>
            </div>
            <div className="text-sm pb-2">
              <input
                className="mr-2 accent-green-600"
                type="checkbox"
                value="Terlaris"
                name="Terlaris"
              />
              <label for="Terlaris">Terlaris</label>
            </div>
            <div className="text-sm">
              <input
                className="mr-2 accent-green-600"
                type="checkbox"
                value="Termahal"
                name="Termahal"
              />
              <label for="Termahal">Termahal</label>
            </div>
          </div>

          <div className="Rating mt-12">
            <div className="font-bold pb-4">
              <h2>Rating</h2>
            </div>
            <div className="text-sm pb-2 flex">
              <input
                className="mr-2 accent-green-600"
                type="checkbox"
                value="bintangLima"
              />
              <div className="flex">
                <img src="/image/ic-star-yellow.png" />
                <img src="/image/ic-star-yellow.png" />
                <img src="/image/ic-star-yellow.png" />
                <img src="/image/ic-star-yellow.png" />
                <img src="/image/ic-star-yellow.png" />
              </div>
            </div>
            <div className="text-sm pb-2 flex">
              <input
                className="mr-2 accent-green-600"
                type="checkbox"
                value="bintangEmpat"
              />
              <div className="flex">
                <img src="/image/ic-star-yellow.png" />
                <img src="/image/ic-star-yellow.png" />
                <img src="/image/ic-star-yellow.png" />
                <img src="/image/ic-star-yellow.png" />
                <img src="/image/ic-star.png" />
              </div>
            </div>
            <div className="text-sm pb-2 flex">
              <input
                className="mr-2 accent-green-600"
                type="checkbox"
                value="bintangTiga"
              />
              <div className="flex">
                <img src="/image/ic-star-yellow.png" />
                <img src="/image/ic-star-yellow.png" />
                <img src="/image/ic-star-yellow.png" />
                <img src="/image/ic-star.png" />
                <img src="/image/ic-star.png" />
              </div>
            </div>
            <div className="text-sm pb-2 flex">
              <input
                className="mr-2 accent-green-600"
                type="checkbox"
                value="bintangDua"
              />
              <div className="flex">
                <img src="/image/ic-star-yellow.png" />
                <img src="/image/ic-star-yellow.png" />
                <img src="/image/ic-star.png" />
                <img src="/image/ic-star.png" />
                <img src="/image/ic-star.png" />
              </div>
            </div>
            <div className="text-sm pb-2 flex">
              <input
                className="mr-2 accent-green-600"
                type="checkbox"
                value="bintangSatu"
              />
              <div className="flex">
                <img src="/image/ic-star-yellow.png" />
                <img src="/image/ic-star.png" />
                <img src="/image/ic-star.png" />
                <img src="/image/ic-star.png" />
                <img src="/image/ic-star.png" />
              </div>
            </div>
          </div>

          <div className="Price mt-12">
            <div className="font-bold pb-4">
              <h2>Price</h2>
            </div>
            <div className="text-sm pb-2 accent-green-600">
              <input type="range" />
            </div>
          </div>

          <div className="minmaxText mt-3 flex justify-between">
            <h3 className="font-bold text-sm w-20">Min</h3>
            <h3 className="font-bold text-sm w-20">Max</h3>
          </div>
          <div className="minMax inline-flex">
            <input
              type="text"
              className="bg-white-100 w-20 border-2 border-gray-300 rounded-lg p-2 text-sm text-gray-400 focus:outline-green-600"
            />
            <p className="text-gray-300 mx-4">-</p>
            <input
              type="text"
              className="bg-white-100 w-20 border-2 border-gray-300 rounded-lg p-2 text-sm text-gray-400 focus:outline-green-600"
            />
          </div>

          <div className="btn mt-7 flex gap-2">
            <button className="bg-green-600 border-2 border-green-700 rounded-lg py-3 px-5 text-white font-bold hover:bg-green-500">
              Apply
            </button>
            <button className="text-slate-400 py-3 px-5 font-bold hover:text-red-500">
              Reset
            </button>
          </div>
        </div>
        <div className="">
          <div className="flex flex-wrap gap-10">
            <div className="border-2 border-gray-300 rounded-lg p-4">
              <img src="/image/bolu_susun.png" className="" />
              <h3 className="font-semibold mt-2">Bolu Susun</h3>
              <p className="text-slate-600 text-xs">
                Disusun dengan penuh kenangan
              </p>
              <div className="flex justify-between mt-1">
                <div className="">
                  <h3 className="font-bold">36.000</h3>
                  <p className="text-sm text-gray-300 font-bold">
                    <strike>40.000</strike>
                  </p>
                </div>
                <div className="self-center">
                  <button className="bg-green-600 border-2 border-green-700 rounded-lg py-1 px-3 font-bold text-white hover:bg-green-500">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>

            <div className="border-2 border-gray-300 rounded-lg p-4">
              <img src="/image/mie.png" className="" />
              <h3 className="font-semibold mt-2">Mie Aceh</h3>
              <p className="text-slate-600 text-xs">
                Rasanya menusuk jiwa dan raga
              </p>
              <div className="flex justify-between mt-1">
                <div className="">
                  <h3 className="font-bold">26.000</h3>
                  <p className="text-sm text-gray-300 font-bold">
                    <strike>30.000</strike>
                  </p>
                </div>
                <div className="self-center">
                  <button className="bg-green-600 border-2 border-green-700 rounded-lg py-1 px-3 font-bold text-white hover:bg-green-500">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>

            <div className="border-2 border-gray-300 rounded-lg p-4">
              <img src="/image/bolu_lapis.png" className="" />
              <h3 className="font-semibold mt-2">Bolu Lapis</h3>
              <p className="text-slate-600 text-xs">
                Lapisan legit di setiap sentuhan
              </p>
              <div className="flex justify-between mt-1">
                <div className="">
                  <h3 className="font-bold">42.000</h3>
                </div>
                <div className="self-center">
                  <button className="bg-green-600 border-2 border-green-700 rounded-lg py-1 px-3 font-bold text-white hover:bg-green-500">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>

            <div className="border-2 border-gray-300 rounded-lg p-4">
              <img src="/image/donat.png" className="" />
              <h3 className="font-semibold mt-2">Donat</h3>
              <p className="text-slate-600 text-xs">Rasa donat</p>
              <div className="flex justify-between mt-1">
                <div className="">
                  <h3 className="font-bold">15.000</h3>
                </div>
                <div className="self-center">
                  <button className="bg-green-600 border-2 border-green-700 rounded-lg py-1 px-3 font-bold text-white hover:bg-green-500">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>

            <div className="border-2 border-gray-300 rounded-lg p-4">
              <img src="/image/pizza.png" className="" />
              <h3 className="font-semibold mt-2">Pizza Huut</h3>
              <p className="text-slate-600 text-xs">Potongan penuh nikmat</p>
              <div className="flex justify-between mt-1">
                <div className="">
                  <h3 className="font-bold">30.000</h3>
                  <p className="text-sm text-gray-300 font-bold">
                    <strike>40.000</strike>
                  </p>
                </div>
                <div className="self-center">
                  <button className="bg-green-600 border-2 border-green-700 rounded-lg py-1 px-3 font-bold text-white hover:bg-green-500">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>

            <div className="border-2 border-gray-300 rounded-lg p-4">
              <img src="/image/telur.png" className="" />
              <h3 className="font-semibold mt-2">Mata Sapi</h3>
              <p className="text-slate-600 text-xs">Penuh mata mata</p>
              <div className="flex justify-between mt-1">
                <div className="">
                  <h3 className="font-bold">12.000</h3>
                </div>
                <div className="self-center">
                  <button className="bg-green-600 border-2 border-green-700 rounded-lg py-1 px-3 font-bold text-white hover:bg-green-500">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-5">
            <button className="px-4 py-3 text-white font-bold bg-green-600 border-2 border-green-700 rounded-lg hover:bg-green-500">
              Show more products <i class="fa fa-angle-down"></i>
            </button>
          </div>
        </div>
      </div>

      <div className="mt-32 flex justify-between">
        <div className="py-16">
          <h2 className="font-bold">Get in touch</h2>
          <div className="mt-4 text-lime-500 text-sm">
            <p className="pb-4">About Us</p>
            <p className="pb-4">Careers</p>
            <p className="pb-4">Press Releases</p>
            <p className="pb-4">Blog</p>
          </div>
        </div>
        <div className="py-16">
          <h2 className="font-bold">Connections</h2>
          <div className="mt-4 text-lime-500 text-sm">
            <p className="pb-4">Facebook</p>
            <p className="pb-4">Twitter</p>
            <p className="pb-4">Instagram</p>
            <p className="pb-4">Youtube</p>
            <p className="pb-4">Linkedin</p>
          </div>
        </div>
        <div className="py-16">
          <h2 className="font-bold">Earnings</h2>
          <div className="mt-4 text-lime-500 text-sm">
            <p className="pb-4">Become an Affiliate</p>
            <p className="pb-4">Advertise your product</p>
            <p className="pb-4">Sell on Market</p>
          </div>
        </div>
        <div className="py-16">
          <h2 className="font-bold">Account</h2>
          <div className="mt-4 text-lime-500 text-sm">
            <p className="pb-4">Your account</p>
            <p className="pb-4">Returns Centre</p>
            <p className="pb-4">100 % purchase protection</p>
            <p className="pb-4">Chat with us</p>
            <p className="pb-4">Help</p>
          </div>
        </div>
      </div>
      <div className="mb-16">
        <p className="text-sm">Copyright © 2022 Perdly Setiawan</p>
      </div>
    </div>
  );
}

export default App;
