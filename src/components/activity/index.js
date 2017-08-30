import React, { Component } from 'react'

import { ActivityRow } from './activityRow'
import * as data from '../../../data/mock-data.json'

export class Activity extends Component {

  render() {

    return(
      <div>
        <h5>Activity</h5>
        <hr />
        <h3>Activity</h3>
        <p>See a record of everyone you have shared details with.</p>
        {
          data.receipts.map((receipt, i) => {
            return (
              <ActivityRow key={i} index={i} receipt={receipt} />
            )
          })
        }
      </div>
    )
  }
}
