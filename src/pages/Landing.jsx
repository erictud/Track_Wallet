import { FiChevronsDown } from "react-icons/fi";
import { GiFlexibleStar } from "react-icons/gi";
import { SiDeepin } from "react-icons/si";
import { SiProtools } from "react-icons/si";

import NavBar from "../ui/NavBar";
import Expandable from "../ui/Expandable";
import { Link } from "react-router-dom";
import LogoIcon from "../ui/LogoIcon";

export default function Landing() {
  return (
    <div>
      <div className="min-h-[100vh] bg-[url('/hero-section.jpg')] bg-center relative text-slate-50">
        <div className="min-h-[100vh] bg-gradient-to-b from-[rgba(85,84,84,0.5)] to-[rgba(0,0,0,.3)]">
          <NavBar />
          <div className="absolute top-[20%] right-[50%] translate-x-[50%] translate-y-[50%] w-[50vw] flex flex-col justify-center gap-10">
            <h1 className="text-2xl sm:text-3xl bold  text-center font-bold">
              Track My Wallet: Your Financial Compass in a Digital World
            </h1>
            <h3 className="hidden lg:block text-xl text-center lowercase">
              Track My Wallet simplifies your financial journey with seamless expense tracking and
              personalized budgeting, empowering you to take control of your money effortlessly.
              With an intuitive interface and insightful analytics, it is the key to unlocking a
              smarter, more informed approach to managing your finances.
            </h3>
          </div>
        </div>
        <div className="absolute bottom-[10%] right-[50%] translate-x-[50%] translate-y-[50%] flex items-center gap-1 ">
          <FiChevronsDown className="fill-slate-200" />
          <p className="font-semibold italic text-slate-200">find more</p>
        </div>
      </div>
      {/* FEATURE ROW */}
      <div className="flex flex-col justify-center px-2 py-3 text-center">
        <h2 className="text-xl semibold italic lowercase lg:pb-5">
          What does trackmywallet offers you?
        </h2>
        <div className="py-2 grid lg:grid-cols-3 items-center justify-center ">
          <div className="flex flex-col justify-between items-center px-5 py-3 lg:py-0 gap-3">
            <div className="w-10 h-10 rounded-full bg-red-400 flex items-center justify-center">
              <GiFlexibleStar className="fill-stone-50" />
            </div>
            <h4 className="text-md lowercase italic font-semibold">Flexible</h4>
            <p className="text-gray-600">
              Enjoy the freedom to manage your finances your way with Track My Wallet s flexible
              functionality, accommodating changes in spending habits and financial goals while
              providing a user-friendly and responsive platform.
            </p>
          </div>
          {/*  */}
          <div className="flex flex-col justify-between items-center px-5 py-3 lg:py-0 gap-3">
            <div className="w-10 h-10 rounded-full bg-green-400 flex items-center justify-center">
              <SiDeepin className="fill-stone-50" />
            </div>
            <h4 className="text-md lowercase italic font-semibold">Insightful</h4>
            <p className="text-gray-600">
              Unlock a deeper understanding of your financial landscape as Track My Wallet provides
              insightful analytics, charts, and reports, offering valuable perspectives on your
              spending patterns and enabling informed decision-making for a more secure financial
              future.
            </p>
          </div>
          {/*  */}
          <div className="flex flex-col justify-between items-center px-5 py-3 lg:py-0 gap-3">
            <div className="w-10 h-10 rounded-full bg-sky-400 flex items-center justify-center">
              <SiProtools className="fill-stone-50" />
            </div>
            <h4 className="text-md lowercase italic font-semibold">Adaptable</h4>
            <p className="text-gray-600">
              Tailor Track My Wallet to your unique financial needs with its adaptable features,
              allowing you to customize budgets, categories, and alerts based on your specific
              preferences and goals.
            </p>
          </div>
        </div>
      </div>
      {/* SIGN UP */}
      <div className="background-clip min-h-[50vh] bg-mantis-400 flex flex-col justify-center lg:items-center gap-5 px-5">
        <h3 className="text-lg text-stone-50 font-semibold">What are you waiting for?</h3>
        <h2 className="text-2xl text-stone-50 font-bold text-center">SIGN UP NOW!</h2>
        <Link className="underline text-sky-500 font-semibold">click here to sign up &rarr;</Link>
      </div>
      {/* FAQs */}
      <div className="flex flex-col py-5 gap-2">
        <h2 className="text-xl semibold italic text-center">FAQs</h2>
        <div className="py-5 px-2  flex items-center lg:justify-center">
          <Expandable>
            <Expandable.ExpandableItem>
              <Expandable.ExpandableItemHeader id="faq1">
                <div className="flex flex-row items-center gap-1">
                  <h5 className="text-lg ">
                    <span className="font-bold">Q:</span> Is TrackMyWallet completely free to use?
                  </h5>
                </div>
              </Expandable.ExpandableItemHeader>
              <Expandable.ExpandableItemBody id="faq1">
                <p className="text-gray-800 pt-2 pl-2">
                  <span className="font-bold">A:</span> Yes, Track My Wallet is entirely free to
                  use. We believe in providing accessible tools for everyone to take control of
                  their finances without any cost.
                </p>
              </Expandable.ExpandableItemBody>
            </Expandable.ExpandableItem>
            {/*  */}
            <Expandable.ExpandableItem>
              <Expandable.ExpandableItemHeader id="faq2">
                <div className="flex flex-row items-center gap-1">
                  <h5 className="text-lg ">
                    <span className="font-bold">Q: </span>How do I start tracking my expenses with
                    Track My Wallet?
                  </h5>
                </div>
              </Expandable.ExpandableItemHeader>
              <Expandable.ExpandableItemBody id="faq2">
                <p className="text-gray-800 pt-2 pl-2">
                  <span className="font-bold">A:</span> Simply sign up for a free account, and you
                  will gain immediate access to our user-friendly interface. From there, you can
                  start recording your expenses, categorize them, and begin your journey towards
                  financial clarity.
                </p>
              </Expandable.ExpandableItemBody>
            </Expandable.ExpandableItem>
            {/*  */}
            <Expandable.ExpandableItem>
              <Expandable.ExpandableItemHeader id="faq3">
                <div className="flex flex-row items-center gap-1">
                  <h5 className="text-lg ">
                    <span className="font-bold">Q:</span> Can I set up personalized budgets with
                    TrackMyWallet?
                  </h5>
                </div>
              </Expandable.ExpandableItemHeader>
              <Expandable.ExpandableItemBody id="faq3">
                <p className="text-gray-800 pt-2 pl-2">
                  <span className="font-bold">A:</span> Absolutely! Track My Wallet allows you to
                  create and customize budgets based on your individual preferences and financial
                  goals. Set spending limits for various categories and receive real-time alerts to
                  help you stay within your budget.
                </p>
              </Expandable.ExpandableItemBody>
            </Expandable.ExpandableItem>
            {/*  */}
            <Expandable.ExpandableItem>
              <Expandable.ExpandableItemHeader id="faq4">
                <div className="flex flex-row items-center gap-1">
                  <h5 className="text-lg ">
                    <span className="font-bold">Q:</span> Are there any hidden fees or premium
                    features?
                  </h5>
                </div>
              </Expandable.ExpandableItemHeader>
              <Expandable.ExpandableItemBody id="faq4">
                <p className="text-gray-800 pt-2 pl-2">
                  <span className="font-bold">A:</span> No, Track My Wallet is completely free, and
                  there are no hidden fees. All features, including personalized budgeting and
                  powerful analytics, are available to every user at no cost.
                </p>
              </Expandable.ExpandableItemBody>
            </Expandable.ExpandableItem>
            {/*  */}
            <Expandable.ExpandableItem>
              <Expandable.ExpandableItemHeader id="faq5">
                <div className="flex flex-row items-center gap-1">
                  <h5 className="text-lg ">
                    <span className="font-bold">Q:</span> Can I access Track My Wallet from multiple
                    devices?
                  </h5>
                </div>
              </Expandable.ExpandableItemHeader>
              <Expandable.ExpandableItemBody id="faq5">
                <p className="text-gray-800 pt-2 pl-2">
                  <span className="font-bold">A:</span> Yes, you can access Track My Wallet from any
                  device with internet connectivity. Your data syncs seamlessly across devices,
                  allowing you to manage your finances on the go.
                </p>
              </Expandable.ExpandableItemBody>
            </Expandable.ExpandableItem>
          </Expandable>
        </div>
      </div>
      {/* FOOTER */}
      <div className=" px-2 py-5 bg-mantis-900 flex items-center justify-between gap-1">
        <div className="flex flex-row items-center gap-1">
          <LogoIcon />
          <h3 className="font-bold text-stone-50">TrackMyWallet</h3>
        </div>
        <p className="font-semibold text-stone-50">@{new Date().getFullYear()}</p>
      </div>
    </div>
  );
}
