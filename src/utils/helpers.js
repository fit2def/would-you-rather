export function getAnswerMetrics(authedUser, question) {
  const votesOne = question.optionOne.votes;
  const votesTwo = question.optionTwo.votes;
  const userVotedOne = votesOne.includes(authedUser);
  const userVotedTwo = votesTwo.includes(authedUser);
  const canVote = !(userVotedOne || userVotedTwo);
  const [p1, p2] = canVote
    ? [50, 50]
    : computeWidths(votesOne.length, votesTwo.length);

  return [{
      percentage: p1,
      ratio: formatRatio(votesOne.length, votesTwo.length),
      didVote: userVotedOne,
      canVote
    }, {
      percentage: p2,
      ratio: formatRatio(votesTwo.length, votesOne.length),
      didVote: userVotedTwo,
      canVote
    }];
}

function computeWidths(v1, v2) {
  const total = v1 + v2;
  const p1 = Math.floor(v1 / total * 100);
  return [
    p1,
    100 - p1
  ];
}

function formatRatio(votes, votesOther){
  return `${votes} out of ${votes + votesOther}`;
}

export function truncateText(text) {
  return text.length > 25
    ? text.substring(0, 25).trim() + '...'
    : text;
}