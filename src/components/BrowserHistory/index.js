import {Component} from 'react' 

import './index.css'

class BrowserHistory extends Component {
    state={
        historyList: initialHistoryList 
    }
    render(){
        const {historyList} = this.state

        return(
            <div>
             <div className="navBar">
                <img src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png " 3alt="app logo" />
                <div className="searchBox">
                    <img src="https://assets.ccbp.in/frontend/react-js/search-img.png" alt="search " />
                    <input type="search" placeholder="Search History" />
                </div>
             </div>
        <div className="SearchResultsContainer">
                   {historyList.length<1 ? <div><p>There is no history to show</p></div> : <ul>
                       
                   </ul>}
}
        </div>
        </div>         
            )
    }
}
export default BrowserHistory