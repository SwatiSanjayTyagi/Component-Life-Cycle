const mainArray =[
{ link:'/' , path:'Home' } ,
{ link:'/mounting' , path:'Mounting' } ,
{ link:'/updating' , path:'Updating' } ,
{ link:'/unmounting' , path:'UnMounting' } 
]

const myMountingData = [
    { evtId: 0, evtType: 'Mounting' , evtSubType: 'constructor()'  , evtDesc: 'The constructor() method is called before anything else, when the component is initiated, and it is the natural place to set up the initial state and other initial values.'},
    { evtId: 1, evtType: 'Mounting' , evtSubType: 'getDerivedStateFromProps()'  , evtDesc: 'This is the natural place to set the state object based on the initial props. It takes state as an argument, and returns an object with changes to the state.'},
    { evtId: 2, evtType: 'Mounting' , evtSubType: 'render()'  , evtDesc: 'The render() method is required, and is the method that actually outputs the HTML to the DOM.'},
    { evtId: 3, evtType: 'Mounting' , evtSubType: 'componentDidMount()'  , evtDesc: 'The componentDidMount() method is called after the component is rendered. This is where you run statements that requires that the component is already placed in the DOM.'}
]

//export  default myMountingData

const myUpdatingData = [
    { evtId: 0, evtType: 'Updating' , evtSubType: 'getDerivedStateFromProps()'  , evtDesc: 'Also at updates the getDerivedStateFromProps method is called. This is the first method that is called when a component gets updated. This is still the natural place to set the state object based on the initial props.'},
    { evtId: 1, evtType: 'Updating' , evtSubType: 'shouldComponentUpdate()'  , evtDesc: 'In the shouldComponentUpdate() method you can return a Boolean value that specifies whether React should continue with the rendering or not. The default value is true.'},
    { evtId: 2, evtType: 'Updating' , evtSubType: 'render()'  , evtDesc: 'The render() method is required, and is the method that actually outputs the HTML to the DOM.'},
    { evtId: 3, evtType: 'Updating' , evtSubType: 'getSnapshotBeforeUpdate()'  , evtDesc: 'In the getSnapshotBeforeUpdate() method you have access to the props and state before the update, meaning that even after the update, you can check what the values were before the update.'},
    { evtId: 4, evtType: 'Updating' , evtSubType: 'componentDidUpdate()'  , evtDesc: 'The componentDidUpdate method is called after the component is updated in the DOM.'}
]

//export default myUpdatingData

const myUnmountingData = [
    { evtId: 0, evtType: 'Unmounting' , evtSubType: 'componentWillUnmount()'  , evtDesc: 'The componentWillUnmount method is called when the component is about to be removed from the DOM.'}
]

//export default myUnmountingData
export default {mainArray,myMountingData,myUpdatingData,myUnmountingData}