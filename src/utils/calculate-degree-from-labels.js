function calculateDegreeFromLabels(degree, labels) {
  const perLevelDegree = (degree) / (labels.length);
  return perLevelDegree;
}

export default calculateDegreeFromLabels;
