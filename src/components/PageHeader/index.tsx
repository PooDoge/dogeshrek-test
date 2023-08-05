import React, { ReactNode } from 'react'
import styled, { css, keyframes } from 'styled-components'
import { Heading, IconButton, Text, Flex, useModal, CogIcon, SyncAltIcon } from '@pancakeswap-libs/uikit'
import SettingsModal from './SettingsModal'
import RecentTransactionsModal from './RecentTransactionsModal'

interface PageHeaderProps {
  title: ReactNode
  description?: ReactNode
  children?: ReactNode
}

// TODO: use UI Kit


const HistoryIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M13 3C8.03 3 4 7.03 4 12H1L4.89 15.89L4.96 16.03L9 12H6C6 8.13 9.13 5 13 5C16.87 5 20 8.13 20 12C20 15.87 16.87 19 13 19C11.07 19 9.32 18.21 8.06 16.94L6.64 18.36C8.27 19.99 10.51 21 13 21C17.97 21 22 16.97 22 12C22 7.03 17.97 3 13 3ZM12 8V13L16.28 15.54L17 14.33L13.5 12.25V8H12Z"
      fill="currentColor"
    />
  </svg>
)

const StyledPageHeader = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
  padding: 24px;
`

const Details = styled.div`
  flex: 1;
`
const HistoryButton = styled(SyncAltIcon)<{ clickable: boolean }>`
${({ clickable }) =>
clickable
  ? css`
      :hover {
        cursor: pointer;
        -webkit-animation: spin 1.5ss cubic-bezier(.36,.07,.19,.97) infinite;
        animation: spin 1.5s cubic-bezier(.36,.07,.19,.97) infinite;
        -webkit-box-shadow: 0px 0px 15px -2px rgba(0,0,0,0.3);
        -moz-box-shadow: 0px 0px 15px -2px rgba(0,0,0,0.3);
        box-shadow: 0px 0px 15px -2px rgba(0,0,0,0.3);
        border-radius: 50%;
      }
      :active {
        cursor: pointer;
        -webkit-animation: grow 0.2s linear 2;
        animation: grow 0.2s linear 2;
      }
      @keyframes spin {
        from {
            transform:rotate(0deg);
        }
        to {
            transform:rotate(360deg);
        }
        @keyframes shake {
          10%, 90% {
            transform: translate3d(-1px, 0, 0);
          }
        
          20%, 80% {
            transform: translate3d(2px, 0, 0);
          }
        
          30%, 50%, 70% {
            transform: translate3d(-4px, 0, 0);
          }
        
          40%, 60% {
            transform: translate3d(4px, 0, 0);
          }
        }
    }
    `
  : null}
`

const SettingsButton = styled(CogIcon)<{ clickable: boolean }>`
${({ clickable }) =>
clickable
  ? css`
      :hover {
        cursor: pointer;
        -webkit-animation: spin 1.5s cubic-bezier(.36,.07,.19,.97) infinite;
        animation: spin 1.5s cubic-bezier(.36,.07,.19,.97) infinite;
        -webkit-box-shadow: 0px 0px 15px -2px rgba(0,0,0,0.3);
        -moz-box-shadow: 0px 0px 15px -2px rgba(0,0,0,0.3);
        box-shadow: 0px 0px 15px -2px rgba(0,0,0,0.3);
        border-radius: 50%;
      }
      :active {
        cursor: pointer;
        -webkit-animation: grow 0.2s linear 1;
        animation: grow 0.2s linear 1;
      }
      @keyframes spin {
        from {
            transform:rotate(0deg);
        }
        to {
            transform:rotate(360deg);
        }
        @keyframes grow {
          0% {
            transform: scale(1.0);
            -webkit-transform: scale(1.0);
          }
          50% {
            transform: scale(2);
            -webkit-transform: scale(1.25);
          }
          100% {
            transform: scale(1.0);
            -webkit-transform: scale(1.0);
          }
        }
    }
    `
  : null}
`


const PageHeader = ({ title, description, children }: PageHeaderProps) => {
  const [onPresentSettings] = useModal(<SettingsModal />)
  const [onPresentRecentTransactions] = useModal(<RecentTransactionsModal />)

  return (
    <StyledPageHeader>
      <Flex alignItems="center">
        <Details>
          <Heading mb="8px">{title}</Heading>
          {description && (
            <Text color="textSubtle" fontSize="14px">
              {description}
            </Text>
          )}
        </Details>
        
        <IconButton variant="text" onClick={onPresentSettings} title="Settings">
            <SettingsButton clickable />
        </IconButton>
        <IconButton variant="text" onClick={onPresentRecentTransactions} title="Recent transactions">
          <HistoryButton clickable />
        </IconButton>
      </Flex>
      {children && <Text mt="16px">{children}</Text>}
    </StyledPageHeader>
  )
}

export default PageHeader
