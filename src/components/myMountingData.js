const myMountingData = [
    { evtId: 0, evtType: 'Mounting' , evtSubType: 'constructor()'  , evtDesc: 'The constructor() method is called before anything else, when the component is initiated, and it is the natural place to set up the initial state and other initial values.'},
    { evtId: 1, evtType: 'Mounting' , evtSubType: 'getDerivedStateFromProps()'  , evtDesc: 'This is the natural place to set the state object based on the initial props. It takes state as an argument, and returns an object with changes to the state.'},
    { evtId: 2, evtType: 'Mounting' , evtSubType: 'render()'  , evtDesc: 'The render() method is required, and is the method that actually outputs the HTML to the DOM.'},
    { evtId: 3, evtType: 'Mounting' , evtSubType: 'componentDidMount()'  , evtDesc: 'The componentDidMount() method is called after the component is rendered. This is where you run statements that requires that the component is already placed in the DOM.'}
]

export default myMountingData
