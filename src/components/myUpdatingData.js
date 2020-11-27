const myUpdatingData = [
    { evtId: 0, evtType: 'Updating' , evtSubType: 'getDerivedStateFromProps()'  , evtDesc: 'Also at updates the getDerivedStateFromProps method is called. This is the first method that is called when a component gets updated. This is still the natural place to set the state object based on the initial props.'},
    { evtId: 1, evtType: 'Updating' , evtSubType: 'shouldComponentUpdate()'  , evtDesc: 'In the shouldComponentUpdate() method you can return a Boolean value that specifies whether React should continue with the rendering or not. The default value is true.'},
    { evtId: 2, evtType: 'Updating' , evtSubType: 'render()'  , evtDesc: 'The render() method is required, and is the method that actually outputs the HTML to the DOM.'},
    { evtId: 3, evtType: 'Updating' , evtSubType: 'getSnapshotBeforeUpdate()'  , evtDesc: 'In the getSnapshotBeforeUpdate() method you have access to the props and state before the update, meaning that even after the update, you can check what the values were before the update.'},
    { evtId: 4, evtType: 'Updating' , evtSubType: 'componentDidUpdate()'  , evtDesc: 'The componentDidUpdate method is called after the component is updated in the DOM.'}
]

export default myUpdatingData