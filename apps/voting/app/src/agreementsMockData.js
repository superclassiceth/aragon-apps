const situation1 = {
  //DisputableVoting.sol: getDisputableInfo(voteId)
  pausedAt: '',
  pauseDuration: '',
  status: 'Paused', //Active, Paused, Cancelled, Closed
  actionId: '1',
  //if actionId != null
  action: {
    //Agreement.sol: getAction(actionID)
    disputable: '', //Address of the disputable that created the action
    disputableActionId: '24',
    collateralId: '',
    endDate: '', //Timestamp when the disputable action ends unless it's closed beforehand
    state: 'Challenged', //Submitted, Challenged, Closed
    submitter: '0xff4643B0161F92b8b568Af62be313E41F32E4baD', //Facu's address
    context: 'Link',
    currentChallengeId: '35',
    //if currentChallengeId != null
    challenge: {
      //Agreement.sol: getChallenge(challengeId)
      actionId: '',
      challenger: '0xa9aC50dCe74C46025DC9dCeAFb4FA21f0Dc142ea', //my address
      endDate: Date.now() + 30 * 1000 * 60 * 60, //is the same as action.endDate?
      context: 'link',
      settlementOffer: '12000000000000000000',
      arbitratorFeeAmount: '1800000000000000000',
      arbitratorFeeToken: 'ANT',
      state: 'Settled', //Waiting, Settled, Disputed, Rejected, Accepted, Voided
      submitterFinishedEvidence: false,
      challengerFinishedEvidence: true,
      disputeId: '24',
      ruling: '',
    },
    //if collateralId != null
    collateral: {
      //Agreement.sol: getCollateralRequirement(disputableAppAddress,collateralId)
      collateralToken: 'ANT',
      actionAmount: '100',
      challengeAmount: '101',
      challengeDuration: '',
    },
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
