import React from 'react'
import { Modal } from '@pancakeswap-libs/uikit'
import SlippageToleranceSetting from './SlippageToleranceSetting'
import TransactionDeadlineSetting from './TransactionDeadlineSetting'
import ExpertModeSetting from './ExpertModeSetting'
import MultiHopSetting from './MultiHopSetting'
import AudioModeSetting from './AudioModeSetting'

type SettingsModalProps = {
  onDismiss?: () => void
}

// TODO: Fix UI Kit typings
const defaultOnDismiss = () => null

const SettingsModal = ({ onDismiss = defaultOnDismiss }: SettingsModalProps) => {
  return (
    <Modal title="Settings" onDismiss={onDismiss}>
      <SlippageToleranceSetting />
      <MultiHopSetting />
      <ExpertModeSetting />
      <AudioModeSetting />
      <TransactionDeadlineSetting />
    </Modal>
  )
}

export default SettingsModal
