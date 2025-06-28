'use client'

import { useLanguage } from '../lib/i18n/context'

export default function Instructions() {
  const { t } = useLanguage()

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
        <div className="flex items-start">
          <span className="text-2xl mr-3">{t('privacyIcon')}</span>
          <div className="flex-1">
            <h3 className="text-lg font-bold mb-2 text-green-900">{t('privacyTitle')}</h3>
            <p className="text-green-800">{t('privacyMessage')}</p>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-bold mb-4 text-blue-900">{t('howToUseTitle')}</h2>
        <ol className="space-y-3 text-blue-800">
          <li className="flex">
            <span className="font-bold mr-2">1.</span>
            <span>{t('howToStep1')}</span>
          </li>
          <li className="flex">
            <span className="font-bold mr-2">2.</span>
            <span>{t('howToStep2')}</span>
          </li>
          <li className="flex">
            <span className="font-bold mr-2">3.</span>
            <span>{t('howToStep3')}</span>
          </li>
          <li className="flex">
            <span className="font-bold mr-2">4.</span>
            <span>{t('howToStep4')}</span>
          </li>
        </ol>
      </div>

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-bold mb-3 text-gray-900">{t('featuresTitle')}</h3>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start">
            <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>{t('feature1')}</span>
          </li>
          <li className="flex items-start">
            <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>{t('feature2')}</span>
          </li>
          <li className="flex items-start">
            <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>{t('feature3')}</span>
          </li>
          <li className="flex items-start">
            <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>{t('feature4')}</span>
          </li>
        </ul>
      </div>
    </div>
  )
}