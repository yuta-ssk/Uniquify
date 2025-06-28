'use client';

import { useLanguage } from '../../lib/i18n/context';

export default function LanguageSelector() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-gray-600">{t('language')}:</span>
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value as 'ja' | 'en')}
        className="px-3 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="ja">{t('japanese')}</option>
        <option value="en">{t('english')}</option>
      </select>
    </div>
  );
}