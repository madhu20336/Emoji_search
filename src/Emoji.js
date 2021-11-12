import React, { Component } from 'react'
import Array from './Emoji_search';

class Emoji extends Component {
    constructor() {
        super()
        this.state = {
            searchData: null
        }
    }
    search = (event) => {

        this.setState({
            searchData: event.target.value
        })
    }

    render() {
        const items = Array.filter((data) => {
            if (this.state.searchData == null)
                return data
            else if (data.title.toLowerCase().includes(this.state.searchData.toLowerCase()) || data.symbol.toLowerCase().includes(this.state.searchData.toLowerCase())) {
                return data
            }
        }).map(data => {
            return (
                <div class="sub_div">
                  <ul>
                    <div className="main-div">
                      <span className="emoji">{data.symbol}{data.title}</span>
                    </div>
                  </ul>
                </div>
            )
          })
            return (
                <div className="div ">
                    <h1>😻Emoji Search😻</h1>
                    <input className="int" type="text" onChange={this.search} placeholder="Which emoji you want search here....." />
                    {items}
                </div>
               
            )
    }
}

export default Emoji;