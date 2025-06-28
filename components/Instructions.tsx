'use client'

import { useLanguage } from '../lib/i18n/context'
import InstructionCard from './InstructionCard'
import StepListItem from './StepListItem'
import FeatureListItem from './FeatureListItem'

export default function Instructions() {
  const { t } = useLanguage()

  return (
    <div className="max-w-3xl mx-auto">
      <InstructionCard variant="green" className="mb-8">
        <div className="flex items-start">
          <span className="text-2xl mr-3">{t('privacyIcon')}</span>
          <div className="flex-1">
            <h3 className="text-lg font-bold mb-2 text-green-900">{t('privacyTitle')}</h3>
            <p className="text-green-800">{t('privacyMessage')}</p>
          </div>
        </div>
      </InstructionCard>

      <InstructionCard variant="blue" className="mb-8">
        <h2 className="text-xl font-bold mb-4 text-blue-900">{t('howToUseTitle')}</h2>
        <ol className="space-y-3 text-blue-800">
          <StepListItem stepNumber={1}>{t('howToStep1')}</StepListItem>
          <StepListItem stepNumber={2}>{t('howToStep2')}</StepListItem>
          <StepListItem stepNumber={3}>{t('howToStep3')}</StepListItem>
          <StepListItem stepNumber={4}>{t('howToStep4')}</StepListItem>
        </ol>
      </InstructionCard>

      <InstructionCard variant="gray">
        <h3 className="text-lg font-bold mb-3 text-gray-900">{t('featuresTitle')}</h3>
        <ul className="space-y-2 text-gray-700">
          <FeatureListItem>{t('feature1')}</FeatureListItem>
          <FeatureListItem>{t('feature2')}</FeatureListItem>
          <FeatureListItem>{t('feature3')}</FeatureListItem>
          <FeatureListItem>{t('feature4')}</FeatureListItem>
        </ul>
      </InstructionCard>
    </div>
  )
}