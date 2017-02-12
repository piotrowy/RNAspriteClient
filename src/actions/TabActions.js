const switchTabAction = (tab) => ({
  type: 'SET_COMPUTATIONAL_MODE',
  name: tab,
  computationalMode: tab
});

export { switchTabAction };