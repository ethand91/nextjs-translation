import { useRouter } from 'next/router';

import homeTranslations from './../public/assets/translations/home.json'

export default function Home() {
  const { locale } = useRouter()

  const homeItems = homeTranslations.home.filter(item => item.locale === locale)

  return (
    <div className="mt-8 p-8 rounded overflow-hidden shadow-lg content-center justify-center">
      <div className="px-6 py-4">
        <h1 className="text-center font-bold text-xl mb-2">{ homeItems[0].title }</h1>
        <p className="text-gray-600 text-base text-center">{ homeItems[0].body }</p>
      </div>
    </div>
  )
}
