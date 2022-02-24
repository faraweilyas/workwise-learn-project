import Layout from '@/components/layout/layout'
import Link from 'next/link'
import SVG from 'react-inlinesvg'

export default function Onboarding({}) {
  return (
    <div className="w-full bg-white" style={{ height: '100vh' }}>
      <div className="w-full p-20 bg-white shadow-none">
        <div className="flex ">
          <SVG
            className="h-7 cursor-pointer"
            src={'/assets/svg/w-logo.svg'}
          ></SVG>
        </div>

        <div className="flex justify-between mt-20 px-20">
          <div className="flex flex-col">
            <h2 className="text-blue-800 text-4xl font-BwN">Welcome Back!</h2>
            <span className="text-gray-500 font-BwN font-20 my-3">
              Enter your workwise company url and
              <br />
              your company email to gain access.
            </span>
          </div>

          <div
            className="flex flex-col border p-10  rounded-sm border-blue-800"
            style={{ width: '500px' }}
          >
            <div className="w-full flex my-5">
              <label class="input">
                <input class="input__field" type="text" placeholder=" " />
                <span class="input__label font-BwN">Your company url </span>
              </label>
              <span className="text-gray-600 font-BwN font-BwN--bold font-13 my-3 px-2">
                .workwise.com
              </span>
            </div>
            <div className="w-full flex my-5">
              <label class="input">
                <input class="input__field" type="text" placeholder=" " />
                <span class="input__label font-BwN">Your company email </span>
              </label>
            </div>
            <button className="w-full bg-blue-800 p-3 py-5 rounded-sm text-white my-5">
              Get secure verification code
            </button>
          </div>
        </div>
        {/* otp */}
        <div className="flex justify-between mt-20 px-20">
          <div className="flex flex-col">
            <h2 className="text-blue-800 text-4xl font-BwN">
              Enter verification code!
            </h2>
            <span className="text-gray-500 font-BwN font-20 my-3">
              Enter the verification code sent to your
              <br />
              company email.
            </span>
          </div>

          <div
            className="flex flex-col border p-10  rounded-sm border-blue-800"
            style={{ width: '500px' }}
          >
            <div className="w-full flex my-5">
              <label class="input">
                <input
                  class="input__field"
                  type="text"
                  placeholder=" "
                  minLength={4}
                  maxLength={6}
                />
                <span class="input__label font-BwN">OTP </span>
              </label>
            </div>

            <button className="w-full bg-blue-800 p-3 py-5 rounded-sm text-white my-5">
              Verify code
            </button>
          </div>
        </div>
        {/* otp */}
      </div>
    </div>
  )
}
