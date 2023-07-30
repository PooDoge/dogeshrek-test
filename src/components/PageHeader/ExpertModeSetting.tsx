import React, { useState } from 'react'
import { Flex, Text, Toggle } from "@pancakeswap-libs/uikit"
import QuestionHelper from "components/QuestionHelper"
import { RowBetween, RowFixed } from "components/Row"
import { useExpertModeManager } from "state/user/hooks"
import { AlertTriangle } from 'react-feather'
import styled from 'styled-components'

const StyledExpertModeSettings = styled.div`
  margin-bottom: 16px;
`


const ExpertModeSetting = () => {

    const [expertMode, toggleExpertMode] = useExpertModeManager()

    const [error, setError] = useState<string | null>(null)

    return (
        <StyledExpertModeSettings>
            <RowBetween>
                <RowFixed>
                    <AlertTriangle size={24} color="red" />
                    <Text style={{ fontWeight: 600 }}>
                        Toggle Expert Mode
                    </Text>
                    <QuestionHelper text="Bypasses confirmation modals and allows high slippage trades. Use at your own risk." />
                </RowFixed>
                <Toggle

                    id="toggle-expert-mode-button"
                    checked={expertMode}
                    onChange={
                        expertMode
                            ? () => {
                                toggleExpertMode()
                                // setShowConfirmation(false)
                            }
                            : () => {
                                toggleExpertMode()
                                // setShowConfirmation(true)
                            }
                    }
                />
            </RowBetween>
        </StyledExpertModeSettings>
    )
}

export default ExpertModeSetting