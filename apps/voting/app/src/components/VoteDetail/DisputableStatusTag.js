import React from 'react'
import {
  GU,
  IconAttention,
  IconClock,
  IconClosed,
  IconInfo,
  Tag,
  textStyle,
  useTheme,
} from '@aragon/ui'

function DisputableActionStatus({ status }) {
  const theme = useTheme()
  if (!status) {
    return null
  }

  if (status === 'Paused') {
    return (
      <React.Fragment>
        <Tag
          background={theme.warningSurface}
          color={theme.warningSurfaceContent}
          mode="indicator"
          label="Challenged"
          icon={<IconAttention size="tiny" />}
        />
      </React.Fragment>
    )
  }

  if (status === 'Cancelled') {
    return (
      <React.Fragment>
        <Tag
          background={theme.surfaceUnder}
          color={theme.disabledContent}
          mode="indicator"
          label="Cancelled"
          icon={<IconClosed size="tiny" />}
        />
      </React.Fragment>
    )
  }

  if (status === 'Closed') {
    return (
      <React.Fragment>
        <Tag
          background={theme.surfaceUnder}
          color={theme.disabledContent}
          mode="indicator"
          label="Closed"
          icon={<IconInfo size="tiny" />}
        />
      </React.Fragment>
    )
  }

  return (
    <React.Fragment>
      <Tag
        mode="indicator"
        label="Scheduled"
        icon={<IconClock size="tiny" />}
      />
    </React.Fragment>
  )
}

export default DisputableActionStatus
