import React from 'react'
import {
  Box,
  Button,
  GU,
  IconAttention,
  IconCoin,
  RADIUS,
  Tag,
  textStyle,
  useTheme,
} from '@aragon/ui'
import { addressesEqual } from '../../web3-utils'

function DisputableActionInfo({ vote, connectedAccount }) {
  const theme = useTheme()
  let mode = null
  if (
    vote.disputable.action &&
    vote.disputable.action.state === 'Challenged' &&
    addressesEqual(
      vote.disputable.action.challenge.challenger,
      connectedAccount
    )
  ) {
    mode = 'challenger'
  }
  if (
    vote.disputable.action &&
    vote.disputable.action.state === 'Challenged' &&
    vote.disputable.action.challenge.state == 'Settled' &&
    addressesEqual(vote.disputable.action.submitter, connectedAccount)
  ) {
    mode = 'settler'
  }
  if (!mode) {
    return <div></div>
  }

  return (
    <div
      css={`
        border-radius: ${RADIUS}px;
        background: ${theme.background};
        padding: ${3.5 * GU}px ${10 * GU}px;
        text-align: center;
      `}
    >
      <div
        css={`
          display: inline-grid;
          grid-template-columns: auto 1fr;
          grid-gap: ${3 * GU}px;
          align-items: center;
          text-align: left;
        `}
      >
        <div
          css={`
            color: ${mode === 'challenger' ? theme.warning : theme.info};
          `}
        >
          {mode === 'challenger' ? (
            <IconAttention size="large" />
          ) : (
            <IconCoin size="large" />
          )}
        </div>
        <div>
          <div
            css={`
                ${textStyle('body1')}
                margin-bottom: ${0.5 * GU}px;
              `}
          >
            {mode === 'challenger'
              ? 'You have challenged this vote'
              : 'You have accepted the settlement offer'}
          </div>
          <div
            css={`
                ${textStyle('body2')}
                color: ${theme.surfaceContentSecondary};
                `}
          >
            {mode === 'challenger' ? (
              <span>
                You challenged this action on{' '}
                <Bold>2020/03/20, 5:30 PM (CET)</Bold> and locked{' '}
                <Bold>100 ANT</Bold> as the action challenge collateral. You can
                manage your deposit balances in Stake Management.
              </span>
            ) : (
              <span>
                You acccepted the setttlement offer on on{' '}
                <Bold>2020/03/20, 5:30 PM (CET)</Bold>
                and your action collateral has been slashed{' '}
                <Bold>-100 ANT</Bold>. You can manage your deposit balances in
                Stake Management.
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

function Bold({ children }) {
  const theme = useTheme()

  return (
    <span
      css={`
        color: ${theme.surfaceContent};
        font-weight: 600;
      `}
    >
      {children}
    </span>
  )
}

export default DisputableActionInfo
