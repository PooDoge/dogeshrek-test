import React, { useState } from 'react'
import { Flex, Text, Toggle } from "@pancakeswap-libs/uikit"
import QuestionHelper from "components/QuestionHelper"
import { RowBetween, RowFixed } from "components/Row"
import { useAudioModeManager } from "state/user/hooks"
import styled from 'styled-components'

const StyledAudioModeSettings = styled.div`
  margin-bottom: 16px;
`


const AudioModeSetting = () => {

    const [audioMode, toggleAudioMode] = useAudioModeManager()

    return (
        <StyledAudioModeSettings>
            <RowBetween>
                <RowFixed>
                    <Text style={{ fontWeight: 600 }}>
                        Toggle Sound Effects
                    </Text>
                    <QuestionHelper text="Turns token select audio off if selected" />
                </RowFixed>
                <Toggle

                    id="toggle-audio-mode-button"
                    checked={audioMode}
                    onChange={
                        audioMode
                            ? () => {
                                toggleAudioMode()
                            }
                            : () => {
                                toggleAudioMode()
                            }
                    }
                />
            </RowBetween>
        </StyledAudioModeSettings>
    )
}

export default AudioModeSetting