import React, { useState } from 'react'
import { Flex, Text, Toggle } from "@pancakeswap-libs/uikit"
import QuestionHelper from "components/QuestionHelper"
import { RowBetween, RowFixed } from "components/Row"
import { useMultiHopManager } from "state/user/hooks"
import { AlertTriangle } from 'react-feather'
import styled from 'styled-components'

const StyledMultiHopSettings = styled.div`
  margin-bottom: 16px;
`


const MultiHopSetting = () => {

    const [multiHop, toggleMultiHop] = useMultiHopManager()

    return (
        <StyledMultiHopSettings>
            <RowBetween>
                <RowFixed>
                    <Text style={{ fontWeight: 600 }}>
                        Disable Multi-Hop Swaps
                    </Text>
                    <QuestionHelper text="Restricts swaps to direct pairs only" />
                </RowFixed>
                <Toggle

                    id="toggle-multi-hop-button"
                    checked={multiHop}
                    onChange={
                        multiHop
                            ? () => {
                                toggleMultiHop()
                                // setShowConfirmation(false)
                            }
                            : () => {
                                toggleMultiHop()
                                // setShowConfirmation(true)
                            }
                    }
                />
            </RowBetween>
        </StyledMultiHopSettings>
    )
}

export default MultiHopSetting