const situation1 = {
  disputable: {
    disputableStatus: 'Paused',
    disputableActionId: 24,
    challenge: {
      challenger: '0xff4643B0161F92b8b568Af62be313E41F32E4baD',
      endDate: Date.now() + 30 * 1000 * 60 * 60,
      settlementOffer: '12000000000000000000',
      arbitratorFeeAmount: '1800000000000000000',
      arbitratorFeeToken: 'ANT',
      state: '',
      submitterFinishedEvidence: false,
      challengerFinishedEvidence: true,
      disputeId: '24',
      ruling: '',
    },
    collateral: {
      collateralToken: 'ANT',
      actionAmount: '100',
      challengeAmount: '',
      challengeDuration: '',
    },
    submitter: '0xa9aC50dCe74C46025DC9dCeAFb4FA21f0Dc142ea',
    endDate: Date.now() + 48 * 1000 * 60 * 60,
  },
}

export function getChallengedVote() {
  return situation1
}

export function getDisputableVote() {
  return situation1
}

export function getAgreement() {
  return {
    tokenSymbol: 'ANT',
    collateralAmount: 100,
    agreementTitle: 'EthicalDAO Agreement.',
  }
}
