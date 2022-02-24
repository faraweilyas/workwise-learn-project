import Layout from '@/components/layout/layout'
import Link from '@/components/link'
import { useRouter } from 'next/router'
import SVG from 'react-inlinesvg'

export default function KnowlegbeBase({}) {
  const router = useRouter()

  return (
    <Layout title="Knowlegbe Base">
      <div
        id="breadcrum"
        className="breacurm flex justify-between fixed z-10  p-4 mt-14  bg-white  shadow-sm"
      >
        <div className='inner-breadcrum'>
        <button className="flex outline-none m-3" onClick={() => router.back()}>
          <SVG className="h-4" src={'/assets/svg/arrow-left.svg'}></SVG>
          <span className="text-gray-700 font-BwN font-BwN--bolder font-12">
            Knowlegbe Base
          </span>
        </button>

        <Link
          to="/document-library/add-new-item"
          className="relative flex p-3 border-50 bg-blue-800  rounded-md font-12 mx-1 mr-10 "
        >
          <SVG className="h-4" src={'/assets/svg/add-empolyee.svg'}></SVG>
          <span className="text-white mx-2"> Add new Item</span>
        </Link>
        </div>
      </div>

      <br />
      <br />

      <div className="directory-main-content p-2 mt-20">
        <div className="w-full flex flex-col bg-white p-3 px-14 rounded-md pb-20 ">
          <h2 className="font-BwN font-BwN--bold text-2xl mt-10">
            Safety in the Office
          </h2>
          <span className="font-BwN">01: Lorem ipsum dolor sit amet</span>

          <p className="font-5 font-BwN--light mt-14">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque consectetur nulla eu volutpat iaculis. Aliquam porta a
            risus vel convallis. Quisque sed eros risus. In hac habitasse platea
            dictumst. Nulla euismod metus nec leo convallis tincidunt ac vitae
            mauris. Suspendisse potenti. Integer sapien dui, venenatis id
            hendrerit eu, mollis id massa. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum
            ante ipsum primis in faucibus orci luctus et ultrices posuere
            cubilia curae; Suspendisse tempor lorem non tortor porta elementum.
            Aliquam tincidunt orci leo, sed auctor ex placerat ac. Pellentesque
            eget malesuada urna, a mattis metus. Vestibulum sapien orci,
            efficitur a tincidunt sit amet, placerat eu nulla. Praesent at eros
            libero. Vivamus consequat ligula accumsan tortor tincidunt
            porttitor. Ut finibus ipsum et ligula tempus elementum. Suspendisse
            eget auctor dolor, nec ullamcorper mauris. Aenean euismod arcu vel
            est pharetra dignissim eu sed nulla.
            <br /> Nullam euismod pulvinar diam eget varius. Donec convallis
            eros nec porttitor vulputate. Nullam sodales accumsan varius. Ut
            eget est egestas risus congue lobortis nec vel mi. Phasellus enim
            lorem, consequat eget purus ac, eleifend ornare nulla. Maecenas
            faucibus ullamcorper mauris, ac malesuada lorem vehicula a. Praesent
            rhoncus velit at ornare cursus. Suspendisse potenti. Maecenas
            porttitor facilisis quam id condimentum. Suspendisse potenti. Nullam
            sit amet purus nec lacus placerat ornare sed non purus. Donec id
            sapien in ex suscipit pulvinar. Cras eu ligula sagittis,
            pellentesque nunc vel, finibus sem. Curabitur pharetra rutrum nibh,
            ac luctus arcu mollis nec. Morbi semper sollicitudin mauris congue
            elementum. Nullam sed nulla est. Proin arcu nisl, varius vel lorem
            volutpat, egestas vehicula nibh. Aliquam erat volutpat. Ut et leo
            velit. Cras in ornare ante. Sed at nunc tristique, pretium nisl in,
            tristique velit. Maecenas feugiat, velit vel feugiat lobortis, ex
            diam consectetur diam, at tempor lacus justo in nisi. Proin eu metus
            sed quam sodales finibus quis nec risus. Mauris non fermentum
            turpis, eu dignissim diam. Quisque sit amet eleifend odio. Donec
            quis efficitur tellus. Morbi faucibus, dui non euismod lacinia,
            massa ligula pharetra mauris, sed consectetur ipsum quam a orci.
            Vivamus pretium nisl vel velit gravida aliquam.
            <br /> Vestibulum id efficitur elit, a ornare ex. Sed ac eros non
            nisl sagittis ultricies vitae non diam. Praesent vehicula nisi
            neque, nec lobortis ante suscipit eu. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Pellentesque consectetur nulla eu
            volutpat iaculis. Aliquam porta a risus vel convallis. Quisque sed
            eros risus. In hac habitasse platea dictumst. Nulla euismod metus
            nec leo convallis tincidunt ac vitae mauris. Suspendisse potenti.
            Integer sapien dui, venenatis id hendrerit eu, mollis id massa.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Vestibulum ante ipsum primis in faucibus orci
            luctus et ultrices posuere cubilia curae; Suspendisse tempor lorem
            non tortor porta elementum. <br /> Aliquam tincidunt orci leo, sed
            auctor ex placerat ac. Pellentesque eget malesuada urna, a mattis
            metus. Vestibulum sapien orci, efficitur a tincidunt sit amet,
            placerat eu nulla. Praesent at eros libero. Vivamus consequat ligula
            accumsan tortor tincidunt porttitor. Ut finibus ipsum et ligula
            tempus elementum. Suspendisse eget auctor dolor, nec ullamcorper
            mauris. Aenean euismod arcu vel est pharetra dignissim eu sed nulla.
            Nullam euismod pulvinar diam eget varius. Donec convallis eros nec
            porttitor vulputate. Nullam sodales accumsan varius. Ut eget est
            egestas risus congue lobortis nec vel mi. Phasellus enim lorem,
            consequat eget purus ac, eleifend ornare nulla. Maecenas faucibus
            ullamcorper mauris, ac malesuada lorem vehicula a. Praesent rhoncus
            velit at ornare cursus. Suspendisse potenti.
          </p>
          <div className="flex flex-row justify-between my-3">
          <button className="relative text-center px-10 py-3 border border-blue-800 text-blue-800 rounded-sm font-13 mx-1 my-3 mr-0">
              Previous article
            </button>
            <button className="relative text-center px-10 py-3 border border-blue-800 text-blue-800 rounded-sm font-13 mx-1 my-3 mr-0">
              Next article
            </button>
          </div>
        </div>
      </div>
    </Layout>
  )
}
