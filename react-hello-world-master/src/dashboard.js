import React, { Component } from 'react';
import './dashboard.css';

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard_div">
          <div className="logo_div">
          </div>
          <div className="searchDivs">
            <div className="searchCategory_tab">
                <div class="input_container">
                    <input type="text" placeholder='Search brand' className="brandSearchBar" />
                </div>
            <h1>SEARCHED BRANDS</h1>
            <ul className='searchedFromList'>
                <li>A</li>
                <li>B</li>
                <li>C</li>
                <li>A</li>
                <li>B</li>
                <li>C</li>
                <li>A</li>
                <li>B</li>
                <li>C</li>
                <li>A</li>
                <li>B</li>
                <li>C</li>
                <li>A</li>
                <li>B</li>
                <li>C</li>
                <li>A</li>
                <li>B</li>
                <li>C</li>
                <li>A</li>
                <li>B</li>
                <li>C</li>
                <li>A</li>
                <li>B</li>
                <li>C</li>
            </ul>
        </div>
        <div className="searchResults_tab">
            
            <h1>SAVED BRANDS</h1>
                
            <ul className='addedFromList'>
                <li>A</li>
                <li>B</li>
                <li>C</li>
                <li>A</li>
                <li>B</li>
                <li>C</li>
                <li>A</li>
                <li>B</li>
                <li>C</li>
                <li>A</li>
                <li>B</li>
                <li>C</li>
                <li>A</li>
                <li>B</li>
                <li>C</li>
                <li>A</li>
                <li>B</li>
                <li>C</li>
                <li>A</li>
                <li>B</li>
                <li>C</li>
                <li>A</li>
                <li>B</li>
                <li>C</li>
            </ul>
        </div>
    </div>

            <div className="succeded_tab">
                            <h1 className='h1divs'>SUCCEDED</h1>
        
                                <div className="scrollSucceded" id="scrollSuccededID">
                                <ol>
                                <li>A</li>
                                <li>B</li>
                                <li>C</li>
                                <li>A</li>
                                <li>B</li>
                                <li>C</li>
                                <li>A</li>
                                <li>B</li>
                                <li>C</li>
                                <li>A</li>
                                <li>B</li>
                                <li>C</li>
                                <li>A</li>
                                <li>B</li>
                                <li>C</li>
                                <li>A</li>
                                <li>B</li>
                                <li>C</li>
                                <li>A</li>
                                <li>B</li>
                                <li>C</li>
                                <li>A</li>
                                <li>B</li>
                                <li>C</li>
                                <li>A</li>
                                <li>B</li>
                                <li>C</li>
                                <li>A</li>
                                <li>B</li>
                                <li>C</li>
                                <li>A</li>
                                <li>B</li>
                                <li>C</li>
                                <li>A</li>
                                <li>B</li>
                                <li>C</li>
                                <li>A</li>
                                <li>B</li>
                                <li>C</li>
                                <li>A</li>
                                <li>B</li>
                                <li>C</li>
                                <li>A</li>
                                <li>B</li>
                                <li>C</li>
                                <li>A</li>
                                <li>B</li>
                                <li>C</li>
                                <li>A</li>
                                <li>B</li>


                                </ol>
                                </div>
                        </div>

                    <div className="failed_tab">
                        <h1 className='h1divs'>FAILED <input type="text" placeholder='Search records' className="recordsSearchBar" />
                            </h1>
                        <div className="scrollFailed">
                        <ol>
                                <li>A</li>
                                <li>B</li>
                                <li>C</li>
                                <li>A</li>
                                <li>B</li>
                                <li>C</li>
                                <li>A</li>
                                <li>B</li>
                                <li>C</li>
                                <li>A</li>
                                <li>B</li>
                                <li>C</li>
                                <li>A</li>
                                <li>B</li>
                                <li>C</li>
                                <li>A</li>
                                <li>B</li>
                                <li>C</li>
                                <li>A</li>
                                <li>B</li>
                                <li>C</li>
                                <li>A</li>
                                <li>B</li>
                                <li>C</li>
                                <li>A</li>
                                <li>B</li>
                                <li>C</li>
                                <li>A</li>
                                <li>B</li>
                                <li>C</li>
                                <li>A</li>
                                <li>B</li>
                                <li>C</li>
                                <li>A</li>
                                <li>B</li>
                                <li>C</li>
                                <li>A</li>
                                <li>B</li>
                                <li>C</li>
                                <li>A</li>
                                <li>B</li>
                                <li>C</li>
                                <li>A</li>
                                <li>B</li>
                                <li>C</li>
                                <li>A</li>
                                <li>B</li>
                                <li>C</li>
                                <li>A</li>
                                <li>B</li>


                                </ol>
                        </div>
                    </div>
 
        </div>

    );
  }
}
export default Dashboard;


