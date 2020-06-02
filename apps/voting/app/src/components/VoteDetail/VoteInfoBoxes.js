import React from 'react'
import {
  Box,
  GU,
  Help,
  IconTime,
  Timer,
  TransactionBadge,
  textStyle,
  useTheme,
} from '@aragon/ui'
import { useNetwork } from '@aragon/api-react'
import { format } from 'date-fns'
import SummaryBar from '../SummaryBar'
import VoteStatus from '../VoteStatus'
import { round, safeDiv } from '../../math-utils'
import { getQuorumProgress } from '../../vote-utils'

const formatDate = date => `${format(date, 'do MMM yy, HH:mm')}`

function VoteInfoBoxes({ vote }) {
  const theme = useTheme()
  const { numData } = vote
  const { minAcceptQuorum, supportRequired, yea, nay } = numData
  const quorumProgress = getQuorumProgress(vote)
  const totalVotes = yea + nay
  const votesYeaVotersSize = safeDiv(yea, totalVotes)
  const votesNayVotersSize = safeDiv(nay, totalVotes)

  return (
    <React.Fragment>
      <Box heading="Status">
        <Status vote={vote} />
      </Box>
      <Box
        heading={
          <React.Fragment>
            Support %
            <Help hint="What is Support?">
              <strong>Support</strong> is the relative percentage of tokens that
              are required to vote “Yes” for a proposal to be approved. For
              example, if “Support” is set to 50%, then more than 50% of the
              tokens used to vote on a proposal must vote “Yes” for it to pass.
            </Help>
          </React.Fragment>
        }
      >
        <div
          css={`
            ${textStyle('body2')};
          `}
        >
          {round(votesYeaVotersSize * 100, 2)}%{' '}
          <span
            css={`
              color: ${theme.surfaceContentSecondary};
            `}
          >
            (>{round(supportRequired * 100, 2)}% needed)
          </span>
        </div>
        <SummaryBar
          positiveSize={votesYeaVotersSize}
          requiredSize={supportRequired}
          css={`
            margin-top: ${2 * GU}px;
          `}
        />
      </Box>
      <Box
        heading={
          <React.Fragment>
            Minimum Approval %
            <Help hint="What is Minimum Approval?">
              <strong>Minimum Approval</strong> is the percentage of the total
              token supply that is required to vote “Yes” on a proposal before
              it can be approved. For example, if the “Minimum Approval” is set
              to 20%, then more than 20% of the outstanding token supply must
              vote “Yes” on a proposal for it to pass.
            </Help>
          </React.Fragment>
        }
      >
        <div
          css={`
            ${textStyle('body2')};
          `}
        >
          {round(quorumProgress * 100, 2)}%{' '}
          <span
            css={`
              color: ${theme.surfaceContentSecondary};
            `}
          >
            (>{round(minAcceptQuorum * 100, 2)}% needed)
          </span>
        </div>
        <SummaryBar
          positiveSize={quorumProgress}
          requiredSize={minAcceptQuorum}
          css={`
            margin-top: ${2 * GU}px;
          `}
        />
      </Box>
    </React.Fragment>
  )
}

function Status({ vote }) {
  const theme = useTheme()
  const network = useNetwork()
  const { endDate, executionDate, executionTransaction, open } = vote.data

  if (open) {
    return (
      <React.Fragment>
        <div
          css={`
            ${textStyle('body2')};
            color: ${theme.surfaceContentSecondary};
            margin-bottom: ${1 * GU}px;
          `}
        >
          Time remaining
        </div>
        <Timer end={endDate} maxUnits={4} />
      </React.Fragment>
    )
  }

  return (
    <React.Fragment>
      <VoteStatus vote={vote} />
      <div
        css={`
          margin-top: ${1 * GU}px;
          display: inline-grid;
          grid-template-columns: auto auto;
          grid-gap: ${1 * GU}px;
          align-items: center;
          color: ${theme.surfaceContentSecondary};
          ${textStyle('body2')};
        `}
      >
        <IconTime size="small" /> {formatDate(executionDate || endDate)}
      </div>
      {executionTransaction && (
        <div>
          <TransactionBadge
            networkType={network && network.type}
            transaction={executionTransaction}
            css={`
              margin-top: ${1 * GU}px;
            `}
          />
        </div>
      )}
    </React.Fragment>
  )
}

export default VoteInfoBoxes
