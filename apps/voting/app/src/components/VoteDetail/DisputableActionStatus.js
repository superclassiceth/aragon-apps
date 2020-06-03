import React from 'react'
import {
  Box,
  Button,
  GU,
  IconClock,
  IconLock,
  Info,
  Tag,
  textStyle,
  Timer,
  useTheme,
} from '@aragon/ui'
import DisputableStatusTag from './DisputableStatusTag'
import { getChallengedVote, getAgreement } from '../../agreementsMockData'

function DisputableActionStatus({}) {
  const theme = useTheme()
  const agreement = getAgreement()

  const vote = getChallengedVote()

  return (
    <React.Fragment>
      <Box heading="Disputable Action Status">
        <Item>
          <Label>Status</Label>
          <DisputableStatusTag status={vote.disputable.disputableStatus} />
        </Item>
        <Item>
          <Label>Action collateral locked</Label>
          <div
            css={`
              display: flex;
              align-items: center;
            `}
          >
            {vote.disputable.collateral.actionAmount}{' '}
            {vote.disputable.collateral.collateralToken}
            <span
              css={`
                padding-left: ${1 * GU}px;
              `}
            >
              <IconLock size="small" />
            </span>
          </div>
        </Item>
        <Item>
          <Label>Challenge period</Label>
          <Timer end={new Date(Date.now() + 48 * 1000 * 60 * 60)} />
        </Item>
        <Item>
          <Label>Agreement</Label>
          <div
            css={`
              ${textStyle('body2')};
              color: ${theme.link};
            `}
          >
            {agreement.agreementTitle}
          </div>
        </Item>
        {vote.dispute && (
          <Item>
            <Label>Dispute</Label>
            <div
              css={`
                ${textStyle('body2')};
                color: ${theme.link};
              `}
            >
              Dispute #{vote.disputable.challengedisputeId}
            </div>
          </Item>
        )}
        <Item>
          <Info>
            Exceeding reaction chamber thermal limit. We have begun power-supply
            calibration. Force fields have been established on all turbo lifts
            and crawlways. Warp drive within normal parameters. I read an ion
            trail.
          </Info>
        </Item>
        <Button mode="strong" wide label="Cancel vote" />
      </Box>
    </React.Fragment>
  )
}

function Item({ children }) {
  return (
    <div
      css={`
        margin-bottom: ${3 * GU}px;
      `}
    >
      {children}
    </div>
  )
}

function Label({ children }) {
  const theme = useTheme()

  return (
    <label
      css={`
        ${textStyle('label2')};
        color: ${theme.surfaceContentSecondary};
        display: block;
        margin-bottom: ${1 * GU}px;
      `}
    >
      {children}
    </label>
  )
}

export default DisputableActionStatus
